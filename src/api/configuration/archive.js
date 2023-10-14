import { 
  cosineSimilarity, 
  BM25,
  tanimotoCoefficient,
  overlapCoefficient,
} from '@/api/configuration/metrics'

import { dictionary } from '@/api/substitutions/dictionary'

// const { terms } = require("../data/diarrhea/definitions")
// const STACK = require("./stack")
import {STACK} from './stack'
import { stopwords } from '@/api/substitutions/stopwords/list'


let formatMemory = (val)=>{

   return {
    index: val.index,
    pattern: val.pattern,
    response: val.response,
    nextTopic: val.nextTopic,
    timesRetrieved: 0
  }
}

let formatReferences = (pattern,index)=>{
  return {
    pattern: pattern,
    index: index
  }
}

let formatReferencesForUntransformedPatterns = (pattern,index)=>{

  return {
    pattern: pattern.replace(/\W+/g, ' '),
    index: index
  }
}

// class database contains all definitions
class ARCHIVE{

  constructor(){

    this.TRIGGERS = { "SKIP_SUBSTITUTION": "!" }

    //counter for the units
    this.index = 0;

    //Tracks how many times it was accessed
    //if more than 3 then reset the index of value back to 0
    this.MAX_VARIATION = 3

    //stores memories
    this.memory = []

    //stores the pattern and index
    this.references = []
    
    //holds original untransformed copy of referneces
    this.referencesUntransformedPatterns = []

    // TERM
    this.substitutions = []

    // tracks the agent responses
    this.responseStack = new STACK()

    // example name etc.
    this.learnedData = new Map()

    this.BM25 = new BM25()
  }

  removeReferenceTriggers(){
    console.log("Removing reference triggers")
    this.references.map((el,index)=>{
      el.pattern = el.pattern.replace(/[!]/g,``)
    })
  }

  printBM25Docs(){
    return this.BM25.printDocs()
  }

  getReferences(){
    return this.references
  }

  //call after sorting 
  transformReferences(){

    let transform = (str) =>{

      // :::WARNING::: METHOD ADJUSTED IGNORE THIS
      // step1:: Replacement for substitution
      // does the replacement using the substitutions
      // let tokens = str.split(' ')
      // tokens.forEach(word=>{
      //   let replacement = dictionary.getSubstitute()
      //   if ( replacement != null ){
      //     str.replace(word,replacement)  
      //   }
      // })


      // for capturing
      // eg. "i am [ren]" then replace [ ] with (?<ren>(.*))
      // use lazy quantified by ading ? in the .*?.
      // means repeat minimum times. 
      // https://javascript.info/regexp-greedy-and-lazy
      str = str.replace(/\[(.*)\]/igm, '(?<$1>(.*))')
  
      //replace * to accept any character
      str = str.replace(/\*/igm, '(.*)')
      
      //replace spaces such to fix space between 
      //two words ex "hello * word" 
      str = str.replace(/\s/igm, '(\\s*)')

      str = str.replace(/[!]/igm,"")
    
      //enclose for strict  
      return `^${str}$`
    }

    //transform all rules in references
    //do not touch the memory
    this.references.map(ref=>{

      // place them first to preserve 

      // console.log(`Before > ${ref.pattern}`)
      // you need to trian them here..

      let reconstructed =  ref.pattern
      
      reconstructed = reconstructed.toLowerCase().replace(/[^\s\w]/g," ").trim()
      // console.log(`\t After Cleaning > ${reconstructed} `)

      let tokens = ref.pattern.split(' ')
      tokens.forEach(word=>{
        
        let sub = dictionary.getSubstitute(word.trim())

        if ( sub != null ){
            // console.log('>> Testing: ',token, ' replace to', word )
            const regex = new RegExp("\\b" + word + "\\b", "g");
            reconstructed = reconstructed.replace(regex,sub)
        }

      })
      
      // console.log(`\t After Reconstruction > ${reconstructed} `)
      
      this.BM25.train(reconstructed,ref.index)
      ref.pattern = transform(reconstructed)

      // old and produces error
      // this.BM25.train(ref.pattern,ref.index)
      // ref.pattern = transform(ref.pattern)
    })

  }

  // finds and replace the correct substitute words for the untransformed references
  replaceSubstitutesInUntransformedReferences(){
    
      // let tokens = str.split(' ')
      // tokens.forEach(word=>{
      //   let replacement = dictionary.getSubstitute()
      //   if ( replacement != null ){
      //     str.replace(word,replacement)  
      //   }
      // })
      let len = this.referencesUntransformedPatterns.length
      for ( let i = 0 ; i < len; i++){
        let ref = this.referencesUntransformedPatterns[i].pattern
        let tokens = ref.split(' ')
        tokens.forEach(word=>{
          let sub = dictionary.getSubstitute(word)
          if ( sub != null ){
            const regex = new RegExp("\\b" + word + "\\b", "g");
            this.referencesUntransformedPatterns[i].pattern = 
              this.referencesUntransformedPatterns[i].pattern.replace(regex,sub)
          }
        })
      }

  }

  removeUntransformedPatternsExtraSpaces(){
    let len = this.referencesUntransformedPatterns.length
    for ( let i = 0 ; i < len; i++){
      let ref = this.referencesUntransformedPatterns[i].pattern
      
      this.referencesUntransformedPatterns[i].pattern = ref.replace(/\s+/g,' ')
    }

  }

  removeStopWordsInReferencePatterns(){
    // remove stop words

    let len = this.referencesUntransformedPatterns.length
    for ( let i = 0 ; i < len; i++){
      let ref = this.referencesUntransformedPatterns[i].pattern
      let tokens = ref.split(' ')
      tokens.forEach(token=>{
        if ( stopwords.includes(token) ){
          
          const regex = new RegExp("\\b" + token + "\\b", "g");
          this.referencesUntransformedPatterns[i].pattern = 
            this.referencesUntransformedPatterns[i].pattern.replace(regex,'')
        }
      })
      this.referencesUntransformedPatterns[i].pattern = this.referencesUntransformedPatterns[i].pattern.trim()
    }

    return null
  }
  

  print(){
    return{
      references: ()=>{
        console.log(`References in Archive`)
        this.references.forEach(el=>{
          // console.log(el)
          console.log(`\t${el.index} - ${el.pattern}`)
        })
      },
      referencesUntransformed:()=>{
        console.log(`Untransformed References in Archive for Cosine Similarity`)
        let max = 5
        this.referencesUntransformedPatterns.forEach(el=>{
          // console.log(el)
          // if ( max-- > 0 ){
            console.log(`\t${el.index} - ${el.pattern}`)
          // }
        })
      },
      referencesUntransformedPatternsUniqueTerms: ()=>{
        let vocab = []
        this.referencesUntransformedPatterns.forEach(ref=>{
          let tokens = ref.split(' ')
          for ( word in tokens ){
            vocab.push(word)
          }
        })

        console.log("Untransformed Pattern Tokens are the following")
        print (vocab)
      },
      memory: ()=>{
        console.log(`Memories in Archive : ${this.memory.length}`)
        this.memory.forEach(el=>{
          console.log(
            `\tindex: ${el.index}` +
            `\n\t\tpattern: ${el.pattern}` +
            `\n\t\tresponses: ${el.response}`
            )
        })
      },
    }
    
  }

  sortReferences(){
    
    let callback = (a,b)=>{
      // a and b are instance of BasicLines
      let responseALength = a.pattern.split(' ').length
      let responseBLength = b.pattern.split(' ').length
      return responseBLength - responseALength
    }

    this.references.sort(callback)
  }

  // key - the term with definition
  // value - an array of value
  storeMemories(unit){

    // iterate the units
    if ( Array.isArray(unit) ){

      //go over each item
      unit.forEach(value=>{
        let currentValue = value
        currentValue.index = this.index
       
        let pattern = currentValue.pattern
        
        //checks if conversation unit contains multiptle patterns
        if ( Array.isArray(pattern) ){
                         
          // stores the original value of the memory
          this.memory.push(currentValue)
          // console.log("?? Current value + " + JSON.stringify(currentValue))
        
          // console.log(`PATTERN:: ${JSON.stringify(value)}`)
          pattern.forEach(el=>{
            // console.log(`\t<< ${el}`)
          
            //NOTE:: BEFORE YOU PUSH REFERENCES
            //YOU NEED TO TRANSFORM THE SUBSTITUTES
            let formattedEntries = formatReferences(el,currentValue.index)
            this.references.push(formattedEntries)    

            this.referencesUntransformedPatterns.push(
              formatReferencesForUntransformedPatterns(el,currentValue.index)
            )

            // let trainDataForBM25 = str.toLowerCase().trim().replace(/[^\s+\w]/g," ")
            // trainDataForBM25.replace(/[\s]+/g," ")
      
            // this.BM25.train(trainDataForBM25,index)
            
          })

        }

        //increment the index
        this.index++
      })
    }else{
      
      unit.index = this.index++
      this.memory.push(unit)
      this.references.push(formatMemory(unit))
    }
  }
  
  // accepts the results of "str.match(pattern)""
  storeLearnedData(regexMatch){
    for ( let group in regexMatch.groups ){
      // console.log(`\tGroups  >> ${group}`)
      // console.log(`\tMatched Groups  >> ${regexMatch.groups[group]}`)
      this.learnedData.set(
        group,
        regexMatch.groups[group]
      )
    }
  }


  getReplyUsingPatternMatching(msg){

    let response = null
    let matchingPattern = ""
    let index = 0 

    /** Begin finding the matching singular memory*/

    while ( index < this.references.length ){

      // we are looking at references which holds the pattern and index
      let ref = this.references[index]

      // i - With this flag the search is case-insensitive
      // g - With this flag the search looks for all matches
      // m - multiline mode
      
      // console.log("Reading Regex: "  + ref.pattern)
      // let regex = new RegExp(ref.pattern,"i")


      // this patterns starts with * so all patterns
      // would start * which is '^(.*)' instead of 
      // starting with letters
      if (ref.pattern.includes('^(.*)')){
        // skip means it is not a regex 

        let regex = new RegExp(ref.pattern)

        // console.log(`Testing:: ${msg} || ${ref.pattern}`)
        // console.log(`Match?:: ${regex.test(msg)}`)
  
        if ( regex.test(msg) ){
          matchingPattern = ref.pattern
          console.log(`Archive:: getReplyUsingPatternMatching (pattern) / ${ref.pattern}`)
          let mem = this.memory[ref.index]
          // let p = Math.floor(Math.random() * mem.response.length);
          response = mem.response[0]
          break;
        }
      }


      index++
    }/** end finding the matching singular memory*/


    return {
      reply: response,
      pattern: matchingPattern
    }
  }


  getReplyUsingCosineSimilarity(msg,threshold){
    console.log('Attempting Cosine Similarity:: ', msg)
    let len = this.referencesUntransformedPatterns.length

    let max = this.referencesUntransformedPatterns[0]
    for ( let i = 1 ; i < len; i++){
      let next = this.referencesUntransformedPatterns[i]
      
      if ( cosineSimilarity(msg,max.pattern) < cosineSimilarity(msg,next.pattern) ){
        max = next
      }
    }

    let reply = null
    let score = cosineSimilarity(msg,max.pattern)
    // console.log(`\tFrom Archive:: Cosine Max Pattern Found: ${JSON.stringify(max)}`)
    // console.log(`\t\tFrom Archive:: Cosine distance:: ${score}`)
    // if ( score > threshold){
      reply = this.memory[max.index].response
    // 

    return {reply,score: score,pattern:max.pattern}
  }

  
  getReplyUsingBM25(msg){ 
    msg = msg.replace(/\s+/g," ")
    console.log('BM25 Test Input:: ',msg)
    let {score,pattern,index} = this.BM25.getScore(msg)
    return {
      score,
      reply: this.memory[index].response[0],
      pattern
    }
  }

  getReplyUsingTanimotoCoefficient(msg){
    let len = this.referencesUntransformedPatterns.length
    
    // THIS IS ERROR... WHY ARE WE SEARCHING UNTRANSFORMED PATTERNS???
    // INPUTS ARE TRANSFORMED BUT THE PATTERNS HAVE NOT. T
    // WE ARE SUPPOSED HAVE THE MSG AND THE PATTERNS TRANSFORMED
    // NO WONDER THERE IS ERROR

    let target = this.referencesUntransformedPatterns[0]
    let targetTanimotoScore = 0
    let nextTanimotoScore = 0
    let next = null
    for ( let i = 1 ; i < len; i++){
      next = this.referencesUntransformedPatterns[i]
      targetTanimotoScore = tanimotoCoefficient(msg,target.pattern)
      nextTanimotoScore = tanimotoCoefficient(msg,next.pattern)
      
      if ( targetTanimotoScore < nextTanimotoScore ){
        target = next
      }
    }
 
    return {
      reply:  this.memory[target.index].response[0],
      pattern:target.pattern,
      score: targetTanimotoScore,
    }
  }

  getReplyUsingOverlapCoefficient(msg){
    let len = this.referencesUntransformedPatterns.length
    
    let target = this.referencesUntransformedPatterns[0]
    let targetOverlapScore = 0
    let nextOverlapScore = 0
    let next = null

    for ( let i = 1 ; i < len; i++){
      
      next = this.referencesUntransformedPatterns[i]
      targetOverlapScore = overlapCoefficient(msg,target.pattern)
      nextOverlapScore = overlapCoefficient(msg,next.pattern)
      
      if ( nextOverlapScore > targetOverlapScore  ){
        target = next
      }
    }
 
    return {
      reply: this.memory[target.index].response[0],
      pattern: target.pattern,
      score: targetOverlapScore,
    }
  }
}


export{
  ARCHIVE
}
// module.exports = ARCHIVE
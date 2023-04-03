"use strict"
import { cosineSimilarity } from '@/api/configuration/distance-formula'
// const { terms } = require("../data/diarrhea/definitions")
// const STACK = require("./stack")
import {STACK} from './stack'


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
  // pattern = pattern.replace
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

    this.TRIGGERS = {
      "SKIP_SUBSTITUTION": "!"
    }

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

    // stores predefined objects
    // use indexer approach ex. dictionary[new val] = val
    this.dictionary = []

    // things that the chatbot learned
    // example name etc.
    this.learnedData = new Map()
  }

  removeReferenceTriggers(){
    console.log("Removing reference triggers")
    this.references.map((el,index)=>{
      el.pattern = el.pattern.replace(/[!]/,``)
    })
  }

  // findSubstitue
  findSubstitute(term){

    let sub
    // return term

    if ( term.match(`${this.TRIGGERS.SKIP_SUBSTITUTION}(\\w+)`)){
      // console.log(`Found >> ${term} << Must skip`)
      return term
    }

    this.substitutions.forEach(el=>{
      //substitute word
      let terms = el.terms
      
      // pattern is found
      let found = terms.find(pattern=>{
        // console.log("\t<< " + term + " << " + pattern)
        // let regex = new RegExp(pattern,"igm")
       
        return term.match(`^${pattern}$`)
      })
      

      if ( found != undefined ){
        sub = el.substitute
        // console.log(`\tFound Substitute for [${sub}] | ${sub}<< `)
      }
    
    })      
    
    // console.log(`>> Substitute for [${term}] is [${sub}]`)
   
    return sub
  }
  
  //call after sorting 
  transformReferences(){

    let transform = (str) =>{

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
      ref.pattern = transform(ref.pattern)
    })

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
          if ( max-- > 0 ){
            console.log(`\t${el.index} - ${el.pattern}`)
          }
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
      dictionary: ()=>{
        console.log(this.dictionary)
      },
      substitutions: ()=>{
        console.log("Printing Substitutes from archive")
        this.substitutions.forEach(el=>{
          console.log(`Substitute: ${el.substitute}`)
          console.log(`\tpatterns: ${el.terms}`)
        })
      }
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



  //stores substitution that will be used to 
  //normalize the words to a base representative 
  storeSubstitutions(data){
    /**
     * let animal = [
     *    'cat',
     *    'dog'
     * ]
     * 
     */
    if (Array.isArray(data)){
      data.forEach(el=>{
        this.substitutions.push(el)
      })
    }else{
      this.substitutions.push(data)
    }
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
        
          // repalace item in element
          // https://www.codegrepper.com/code-examples/javascript/loop+through+array+and+change+value+javascript
          // store the normalized value of the memory
          pattern.forEach((el,index)=>{
            pattern[index] = this.normalizeString(el)
          })
                  
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
          })

        }else{

          if ( typeof currentValue.response === 'function' ){
            // executing stored function
            // https://stackoverflow.com/questions/53314915/mongodb-how-to-execute-stored-function-in-node-js
            let x = currentValue.response.toString()
            console.log("\t\tOh no you are sending a fucntion:: " + currentValue.response())
          }else{
            
            currentValue.pattern = this.normalizeString(currentValue.pattern)
            
            
            this.memory.push(currentValue)
            this.references.push(
              formatReferences(currentValue.pattern, currentValue.index)
            ) 
            
          }
  
        }

        //increment the index
        this.index++
      })
    }else{
      
      unit.index = this.index++
      unit.pattern = this.normalizeString(unit.pattern)
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

  storeDictionary(term){
    
    if ( Array.isArray(term) ){
      console.log("Pushing an array of definition")
      term.forEach(el=>{

        let formatNeeded = "^(.*)$"
        let regEx = new RegExp(formatNeeded)     
        
        if ( regEx.test(el.term) ){
          // no need to format
        }else{
          el.term = `^${el.term}$`
        }
        
        this.dictionary.push(el)
      })
    }else{
      console.log("Pushing individual definition")
      this.dictionary.set(term.term,term.definition)
    }


  }

  normalizeString(str){
    
    let tokens = str
    
    //  ngram splitting argmax=3
    //  https://stackoverflow.com/questions/48826622/split-string-into-pairs-triplets-quadruplets-and-on-ngrams
    function* ngrams(a, n) { 
      let buf = [];
  
      for (let x of a) {
          buf.push(x);
          if (buf.length === n) {
              yield buf;
              buf.shift();
          }
      }
    }
   
    const MAX_SPLIT_GRAMS = 3
    let current_split_grams = 1
    let skipSymbol = this.TRIGGERS.SKIP_SUBSTITUTION
    // pattern !antidiarrhea
  
    while(current_split_grams <= MAX_SPLIT_GRAMS){
      // console.log("Split:: " + current_split_grams)
      for (let g of ngrams(tokens.split(' '), current_split_grams)){
        let split = g.join(' ')

        let substitute = this.findSubstitute(split)
        
        
        // console.log(`\t>> Substitute for [${split}] is [${substitute}]`)
        
        if ( substitute != undefined ){
          // console.log(`\t\t -- Replacing ${split} | ${substitute} `)
          str = str.replace(split,substitute)
        }
      }
    
      // console.log(`End of NGRAM : ${current_split_grams}`)
      // console.log("++ Normalized >> " + str)
      tokens = str
      current_split_grams++
    }

     // join tokens split
     str = tokens
 
    //  console.log(`Message after substitution:: ${str}`)
     return str
  }

  getReplyUsingPatternMatching(msg){

    // normalize the terms by doing substitutions
    msg = this.normalizeString(msg)

    let response = null

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
  
          console.log(`Archive:: getReplyUsingPatternMatching (pattern) / ${ref.pattern}`)
          let mem = this.memory[ref.index]
          let p = Math.floor(Math.random() * mem.response.length);
          response = mem.response[p]
          break;
        }
      }

      

      index++
    }/** end finding the matching singular memory*/


    return  response 
  }

  getDictionary(term){

    // let res = this.dictionary.find(el=>el.term.match(term))
    // console.log(`Dictionary Test for >> ${term}`)
    // console.log(`Found definition of ${term} << ${res.definition}`)
    return this.dictionary[term]
  }


  getReplyUsingCosineSimilarity(msg,threshold){
    let len = this.referencesUntransformedPatterns.length

    let max = this.referencesUntransformedPatterns[0]
    for ( let i = 1 ; i < len; i++){
      let next = this.referencesUntransformedPatterns[i]
      
      if ( cosineSimilarity(msg,max.pattern) < cosineSimilarity(msg,next.pattern) ){
        max = next
      }
    }

    let reply = null
    let cosine = cosineSimilarity(msg,max.pattern)
    console.log(`\tFrom Archive:: Cosine Max Pattern Found: ${max.pattern}`)
    console.log(`\t\tFrom Archive:: Cosine distance:: ${cosine}`)
    // console.log(`Pattern:: ${this.memory[max.index].response}`)
    if ( cosine > threshold){
      reply = this.memory[max.index].response
    }

    return {reply,cosine}
  }


}


export{
  ARCHIVE
}
// module.exports = ARCHIVE
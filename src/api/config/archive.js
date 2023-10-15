import { countMatchingWords, cosineSimilarity, BM25, tanimotoCoefficient,overlapCoefficient,} from '@/api/config/metrics'
import { DICTIONARY } from './dictionary'
import { DOMAIN_ENTITIES} from '@/api/rules/priority-words'
import { reactive,ref } from 'vue'

let _transformWildcards = (str)=>{
  //replace * to accept any character
  str = str.replace(/\s/igm, '')
  // str = str.replace(/[\*]/g, '(.*)')
  str = str.replace(/[\*]/g, '(.*)')
  // str = str.replace("*", '(.*)')
        
  //replace spaces such to fix space between 
  // str = str.replace(/\s/igm, '(\\s*)')
  // str = _removeTrailingLeadingDuplicateSpaces(str)
  // str = str.replace(/\s/igm, '(.*)')
  //enclose for strict  
  return  `^${str}$`
  // return  `${str}`
}

function _countWordDifferences(sentence1, sentence2) {
  const words1 = sentence1.split(' ');
  const words2 = sentence2.split(' ');

  let count = 0;

  for (let i = 0; i < words1.length; i++) {
    if (words1[i] !== words2[i]) {
      count++;
    }
  }

  return count;
}

let _removeTrailingLeadingDuplicateSpaces = (str) =>{
  str = str.replace(
    /(^\s+|\s+$)|\s+/g, 
    function (match, leadingTrailing, duplicate) {
        if (leadingTrailing) {
            return '';
        } else if (duplicate) {
            return ' ';
        }
    }
  )

  return str
}

// https://medium.com/@bsalwiczek/ref-vs-reactive-in-vue-3-whats-the-right-choice-7c6f7265ce39
// https://medium.com/js-dojo/vue-3-reactivity-basics-784363fab03e
let VOCABULARY = ref([])

function _removeDuplicateWords(str) {
  const words = str.split(' ');

  const uniqueWords = words.filter((word, index) => {
    return words.indexOf(word) === index;
  });

  const result = uniqueWords.join(' ');

  return result;
}

// class database contains all definitions
class Archive{

  constructor(){

    //counter for the units
    this.index = 0;

    //stores memories
    this.memory = []

    //holds original untransformed copy of referneces:: previously as referencesUntransformedPatterns
    this.forwardIndex = []

    this.forwardIndexUntransformed = []
    
    // this.vocabulary = []

    // WE ONLY ALLOW to have 3 word differences to penalize very long rules
    this.MAX_WORD_DIFFERENCE = 3

    this.BM25 = new BM25()
  }

  printBM25Docs(){
    return this.BM25.printDocs()
  }

  getReferences(){
    return this.references
  }

  sortReferences(){
    
    let callback = (a,b)=>{
      // a and b are instance of BasicLines
      let responseALength = a.pattern.split(' ').length
      let responseBLength = b.pattern.split(' ').length
      return responseBLength - responseALength
    }

    this.forwardIndex.sort(callback)
  }

  storeMemories(payload) {

    payload.forEach(underlyingRule => {

      underlyingRule.index = this.index
      
      this.memory.push(underlyingRule)

      let underlyingPattern = underlyingRule.pattern
      
      //checks if conversation unit contains multiptle patterns
      if (Array.isArray(underlyingPattern)) {

        underlyingPattern.forEach(rawPattern => {

          // required to have at least two tokens
          // if ( rawPattern.includes('*') ) return

          // if ( rawPattern.split(' ').length < 3) return

          let targetPattern = rawPattern
          
          // lower case
          targetPattern = targetPattern.toLowerCase()

          this.forwardIndexUntransformed.push(targetPattern)

          // replace all nonword characters 
          targetPattern = targetPattern.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g,' ')

          targetPattern = _removeTrailingLeadingDuplicateSpaces(targetPattern)
        
          // do substitutions first before remove to catch word equivalence in difference language
          // example, why , bakit , enduken - normalized to - why then we can remove
          // begin substitutions

          // WORKING - COMMENTED ONLY FOR OPTIMIZATION
          // targetPattern.split(' ').forEach(word=>{
          //   let sub = DICTIONARY.getSubstitute(word)
          //   if ( sub != null ){
          //     const regex = new RegExp("\\b" + word + "\\b", "g");
          //     targetPattern = targetPattern.replace(regex,sub)
          //   }
          // })
          
          // // remove stopwords
          // targetPattern.split(' ').forEach(word=>{
          //   if ( DICTIONARY.isStopWord(word) ){
          //     const regex = new RegExp("\\b" + word + "\\b", "g");
          //     targetPattern = targetPattern.replace(regex,'')
          //   }
          // })
 
 
          targetPattern.split(' ').forEach(word=>{
            let sub = DICTIONARY.getSubstitute(word)
            if ( sub != null ){
              const regex = new RegExp("\\b" + word + "\\b", "g");
              targetPattern = targetPattern.replace(regex,sub)
            }
          })
          
          targetPattern.split(' ').forEach(word=>{
            // remove stopwords
            if ( DICTIONARY.isStopWord(word) ){
              const regex = new RegExp("\\b" + word + "\\b", "g");
              targetPattern = targetPattern.replace(regex,'')
            }else{
              // record all words that are not stop words
              // if ( !this.vocabulary.includes(word) ){
              //   this.vocabulary.push(word)
              // }

              if ( !VOCABULARY.value.includes(word) ){
                VOCABULARY.value.push(word)
              }
            }
          })
 


          targetPattern = _removeTrailingLeadingDuplicateSpaces(targetPattern)

          
          // we have to purge duplicate words , this particular to those with synonyms
          // but this is only allowed on the informaiton retreival approach.. you cannot remove duplicates 
          // in regex matching

          targetPattern = _removeDuplicateWords(targetPattern)

          this.forwardIndex.push({
            pattern: targetPattern,
            index: this.index,
            rawPattern: rawPattern,
          })

          this.BM25.train(targetPattern,this.index)

        })

      }

      this.index++
    })
  }
  getVocabulary(){
    return this.vocabulary
  }

  getReplyUsingCosineSimilarity(msg){

    msg = _removeTrailingLeadingDuplicateSpaces(msg)

    let len = this.forwardIndex.length

    let max = this.forwardIndex[0]
    for ( let i = 1 ; i < len; i++){
      let next = this.forwardIndex[i]
      next.pattern = _removeTrailingLeadingDuplicateSpaces(next.pattern)

      if ( cosineSimilarity(msg,max.pattern) < cosineSimilarity(msg,next.pattern ) ){
        max = next
      }
    }

    let reply = null
    let score = cosineSimilarity(msg,max.pattern)
    // console.log(`\tFrom Archive:: Cosine Max Pattern Found: ${JSON.stringify(max)}`)
    // console.log(`\t\tFrom Archive:: Cosine distance:: ${score}`)
    // if ( score > threshold){
      reply = this.memory[max.index].response[0]
    // 

    return {reply,score: score,pattern:max.pattern, rawPattern: max.rawPattern}
  }

  
  getWeightedCosineSimilarityScore = (sentence1, sentence2)=> {
    // Split the sentences into arrays of words
    const words1 = sentence1.toLowerCase().split(/[^\w]+/);
    const words2 = sentence2.toLowerCase().split(/[^\w]+/);

    // Compute the word frequencies for each sentence
    const freq1 = {};
    const freq2 = {};
    
    for (const word of words1) {
      freq1[word] = (freq1[word] || 0) + 1;
    }
    
    for (const word of words2) {
      freq2[word] = (freq2[word] || 0) + 1;
    }

    
    // Compute the dot product of the word frequency vectors
    let dotProduct = 0;
    for (const word in freq1) {
      if (word in freq2) {
        dotProduct += this.BM25.calculateBM25(word, sentence1) * (this.BM25.calculateBM25(word, sentence2));
      
      }
    }
    
    //IMPORTANT CALCULATION REMINDER
    // we need to multiply numbers with zero if they dont exist because why would you give score to something that dont exist?

    // original
    // // Compute the magnitudes of the word frequency vectors
    // const mag1 = Math.sqrt(words1.reduce((sum, word) => sum + this.BM25.calculateBM25(word, sentence1)**2, 0));
    // const mag2 = Math.sqrt(words2.reduce((sum, word) => sum + this.BM25.calculateBM25(word, sentence2)**2, 0));
    

    let scaleFactor = 0;
    // MODIFY SUCH THAT IF WORDS ARE NOTE RECOGNIZE THEY ARE SCALED OR WILL HAVE BIGGER SCORE IN PUSHING THE SCORES DOWN
    // THE INTUITION IS THAT BY INTRODUCING A SCALE FACTOR WE ENSURE THAT WORDS NOT PRESENT IN THE VOCABULARY 
    // DO NOT SKEW IN FAVOR TO THOSE THAT ARE PRESENT 
    const mag1 = Math.sqrt(words1.reduce((sum, word) =>{
      let bm25 = this.BM25.calculateBM25(word, sentence1)**2
      // return sum + ( VOCABULARY.value.includes(word) || words2.includes(word) ? bm25: bm25 * scaleFactor) 
      return sum + ( VOCABULARY.value.includes(word) ? bm25: 0) 
    } , 0));

    const mag2 = Math.sqrt(words2.reduce((sum, word) => {
      let bm25 = this.BM25.calculateBM25(word, sentence2)**2
      return sum + ( VOCABULARY.value.includes(word) ? bm25: 0) 
    } , 0));
    

    return dotProduct / (mag1 * mag2);
  }
  
  getReplyUsingWeightedCosineSimilarity(msg){
    // console.log('Attempting Cosine Similarity:: ', msg)

    msg = _removeTrailingLeadingDuplicateSpaces(msg)

    let identifyPrioriyWords = (input)=>{

      let list = []
      input.split(' ').forEach(word=>{

        if ( DOMAIN_ENTITIES.includes(word) ){
            list.push(word)
        }

      })

      return list
      
    }

    let len = this.forwardIndex.length

    let init = 0
    let max = this.forwardIndex[init]

    let getMatchingPriorityWords = (msg,pattern) =>{
      let i = 0 
      let pMsg = []
      let pPattern = []

      pMsg = msg.filter(word=>{
        return this.DOMAIN_ENTITIES.includes(word)
      })

      pPattern = pattern.filter(word=>{
        return this.DOMAIN_ENTITIES.includes(word)
      })
      
      // priority words must be at least 2

      let count = countMatchingWords(pMsg.join(' '),pPattern.join(' '))
      return count
    }

    for ( let i = 1 ; i < len; i++){
      let next = this.forwardIndex[i]
      next.pattern = _removeTrailingLeadingDuplicateSpaces(next.pattern)

      // 1. if it contains priority words msg
      // 2. then priority word must be present in pattenr too
      //steps
      // get list of priority words
      // these priority words must be also preset in the 
      // if ( getMatchingPriorityWords(msg,next.pattern) < 2) continue

 
      // message must have two matching words 
      if ( countMatchingWords(msg,next.pattern) < 2 ) continue
      
      // we ar enterested in those with three or more words
      // a final resort here is:
      // 1. scan all rules > 2
      // 2. after all these have been scanned > check for all rules less than 2
      // let 

      // ERROR MUST BE FIXED:: TO AVOID MATCHING I SENTENCE, patterns should be at least a triplet
      if ( next.pattern.split(' ').length < 3) continue
      // console.log(`Archive:: Weighted Cosine::Pattern ${next.pattern} | ${patternTokens.length}`)
      

      // identify priority words is msg
      let msgPriorityWords = identifyPrioriyWords(msg)

      // identify priority words in target
      let patternPriorityWords = identifyPrioriyWords(next.pattern) 
          


      // test if priority words matches
      // idea is that at least one of the priority words must match
      let priortyWordExist = false
      for ( let j=0; j<msgPriorityWords.length; j++){
        if ( patternPriorityWords.includes(msgPriorityWords[j]) ){
          priortyWordExist = true
        }
      }

      if ( !priortyWordExist ) continue


      // we posit that maximum the rule we are finding must have very few word difference
      // 
      // if ( _countWordDifferences(msg,next.pattern) > this.MAX_WORD_DIFFERENCE ) continue

      // NOTE:: THIS IS THE ORIGINAL
      if ( this.getWeightedCosineSimilarityScore(msg,max.pattern) < this.getWeightedCosineSimilarityScore(msg,next.pattern ) ){
        max = next
      }

      // rawPatternWithTermSubstitutes
    }
    

    let reply = null
    // NOTE:: THIS IS THE ORIGINAL
    let score = this.getWeightedCosineSimilarityScore(msg,max.pattern)
    // console.log(`\tFrom Archive:: Cosine Max Pattern Found: ${JSON.stringify(max)}`)
    // console.log(`\t\tFrom Archive:: Cosine distance:: ${score}`)
    // if ( score > threshold){
      reply = this.memory[max.index].response[0]
    // 

    return {reply,score: score,pattern:max.pattern, rawPattern: max.rawPattern}
  }


  
  getReplyUsingVanillaCosineSimilarity(msg){

    msg = _removeTrailingLeadingDuplicateSpaces(msg)

    let identifyPrioriyWords = (input)=>{

      let list = []
      input.split(' ').forEach(word=>{

        if ( DOMAIN_ENTITIES.includes(word) ){
            list.push(word)
        }

      })

      return list
      
    }

    let len = this.forwardIndex.length

    let init = 0
    let max = this.forwardIndex[init]

    for ( let i = 1 ; i < len; i++){
      let next = this.forwardIndex[i]
      next.pattern = _removeTrailingLeadingDuplicateSpaces(next.pattern)
 
      // ERROR MUST BE FIXED:: TO AVOID MATCHING 1 SENTENCE, patterns should be at least a triplet
      // if ( next.rawPattern.split(' ').length < 2 ) continue
      // console.log(`Archive:: Weighted Cosine::Pattern ${next.pattern} | ${patternTokens.length}`)
      

      // identify priority words is msg
      let msgPriorityWords = identifyPrioriyWords(msg)

      // identify priority words in target
      let patternPriorityWords = identifyPrioriyWords(next.pattern) 
          


      // test if priority words matches
      // idea is that at least one of the priority words must match
      let priortyWordExist = false
      for ( let j=0; j<msgPriorityWords.length; j++){
        if ( patternPriorityWords.includes(msgPriorityWords[j]) ){
          priortyWordExist = true
        }
      }

      if ( !priortyWordExist ) continue

      if ( cosineSimilarity(msg,max.pattern) < cosineSimilarity(msg,next.pattern ) ){

        let lenCurrentMax =  max.pattern.split(' ').length
        let lenNext = next.pattern.split(' ').length
        if ( lenCurrentMax <= lenNext){
          max = next
        }

      }

    }
    

    let reply = null
    // NOTE:: THIS IS THE ORIGINAL
    let score = cosineSimilarity(msg,max.pattern)
    reply = this.memory[max.index].response[0]

    return {reply,score: score,pattern:max.pattern, rawPattern: max.rawPattern}
  }
  
  getReplyUsingBM25(msg){ 
    msg = msg.replace(/\s+/g," ")
    let {score,pattern,index} = this.BM25.getScore(msg)
    return {
      score,
      reply: this.memory[index].response[0],
      pattern
    }
  }

  getReplyUsingTanimotoCoefficient(msg){
    let len = this.forwardIndex.length
    
    let target = this.forwardIndex[0]
    let targetTanimotoScore = 0
    let nextTanimotoScore = 0
    let next = null
    for ( let i = 1 ; i < len; i++){
      next = this.forwardIndex[i]
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
    let len = this.forwardIndex.length
    
    let target = this.forwardIndex[0]
    let targetOverlapScore = 0
    let nextOverlapScore = 0
    let next = null

    for ( let i = 1 ; i < len; i++){
      
      next = this.forwardIndex[i]
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

class WilcardArchive{
  
  constructor(){
    // contains the index numbers
    this.forwardIndex = []

    // stores the rules
    this.memory = []

    // tracks the index number
    this.index = 0
  }

  getReplyUsingWildcardMatching(msg){
    let response = null
    let matchingPattern = null
    let originalPattern = null
    let len = this.forwardIndex.length;

    // console.log(`Archive::wildcard matching:: <MSG>::  ${JSON.stringify(msg)}`)

    for (let i=0; i < len ; i++){
      let target = this.forwardIndex[i]
      let pattern = target.pattern 
      let regex = new RegExp(pattern)
      // console.log(`\tArchive::getReplyUsingWildcardMatching [${pattern}][${regex.test(msg)}]`)

      if ( regex.test(msg) ){
        matchingPattern = target.pattern
        let mem = this.memory[target.index]
        response = mem.response[0]
        originalPattern = target.rawPattern
        break;
      }
    }

    
    console.log(`\tArchive::Pattern::  ${JSON.stringify(originalPattern)}`)

    return {
      rawPattern: originalPattern,
      pattern: matchingPattern,
      reply: response
    } 
  }
  
  
  sortMemory(){
    
    let callback = (a,b)=>{
      // a and b are instance of BasicLines
      let responseALength = a.pattern.split(' ').length
      let responseBLength = b.pattern.split(' ').length
      return responseBLength - responseALength
    }

    this.forwardIndex.sort(callback)
  }

  // key - the term with definition
  // value - an array of value
  storeMemory(rule){
    // rule must contain ([wildcard rules],[response],)
    
    // tranform rules 
    let transformedPatterns = []
    let rawPatterns = rule.patterns

    rule.patterns.forEach((pattern,index)=>{
      rule.patterns[index] = _removeTrailingLeadingDuplicateSpaces(pattern)
      let words = pattern.split(/\W+/g)
      // pattern.split(//g).
      words.forEach(word=>{
        let sub = DICTIONARY.getSubstitute(word)
        if ( sub != null ){
          const regex = new RegExp("\\b" + word + "\\b", "g");
          // pattern = pattern.replace(regex,sub)
          rule.patterns[index] = rule.patterns[index].replace(regex,sub)
        }
      })

      


      // lets store all words
      pattern.split(/\W/).forEach(word => {
        if ( !VOCABULARY.value.includes(word)) {
          VOCABULARY.value.push(word)
        }
      })

      // let patternWithNoDuplicateWords = pattern.split(' ').reduce((unique, word) => {
      //   if (!unique.includes(word)) {
      //     unique.push(word);
      //   }
      //   return unique;
      // },[])

      // pattern = patternWithNoDuplicateWords.join(' ')

      // transformedPatterns.push(pattern)s
      // return pattern
    })


    rule = {
      rawPattern: rawPatterns,
      patterns: rawPatterns,
      response: rule.response,
      index: this.index
    }

    // console.log(`Raw >> ${rule.rawPatterns}`)
    // console.log(`\tTransformed >> ${rule.patterns}`)

    // console.log(`Wildcard::
    //   \n${JSON.stringify(rule)}`)

    this.memory.push(rule)

    this.index++
  }

  buildForwardIndex(){
    console.log('Building Forward Index:: total memory', this.memory.length)

    this.memory.forEach(mem=>{
      let patterns = mem.patterns
      // console.log(`-->> index ${JSON.stringify(mem)}`)
      if (Array.isArray(patterns)){

        patterns.forEach((p,index)=>{

          if ( p != undefined ){
            // console.log(`\t --<< ${p} [[]] ${index} [[]] ${mem.rawPattern[index]}`)
            this.forwardIndex.push({
              // raw pattern here is the original
              rawPattern: mem.rawPattern[index],
              // patten here is the transformed
              pattern: _transformWildcards(p), 
              // pattern:p,
              index: mem.index
            })    
          }
        })
      }
    })

    this.sortMemory()
  }

  printForwardIndex(){
    console.log(`WildcardArchive - Printing Forward Index:: ${this.forwardIndex.length}`)
    for ( let i = 0 ; i < this.forwardIndex.length; i++){
      let target = this.forwardIndex[i]
      let mem = this.memory[target.index]
      console.log(`\t${target.pattern}`)
      // console.log(`\t\t${mem.response[0]}`)
    }
    // console.log(`${this.forwardIndex}`)
  }
  
}

export{
  Archive,
  WilcardArchive,
  VOCABULARY
}
// module.exports = ARCHIVE
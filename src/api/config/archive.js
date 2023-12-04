import { 
  countMatchingWords, 
  cosineSimilarity,
  BM25, 
  tanimotoCoefficient,
  overlapCoefficient,
} from '@/api/config/metrics'
import { DICTIONARY } from './dictionary'
import { DOMAIN_ENTITIES} from '@/api/rules/priority-words'
import { reactive,ref } from 'vue'
import { removeRedundantSpaces, transformWildcards } from '@/api/engine-utils'


// https://medium.com/@bsalwiczek/ref-vs-reactive-in-vue-3-whats-the-right-choice-7c6f7265ce39
// https://medium.com/js-dojo/vue-3-reactivity-basics-784363fab03e
let VOCABULARY = ref([])


// class database contains all definitions
class Archive{

  constructor(){

    
    this.index = 0; //counter for the units

    this.memory = [] //stores memories

    this.forwardIndex = []

    this.wildcardIndex = []
        
    this.MAX_WORD_DIFFERENCE = 3

    this.BM25 = new BM25()
  }

  printBM25Docs(){return this.BM25.printDocs() }

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

          let targetPattern = rawPattern
          targetPattern = targetPattern.toLowerCase()
          targetPattern = targetPattern.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g,' ')
          targetPattern = removeRedundantSpaces(targetPattern)
        
          // the bottleneck is here...
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

              if ( !VOCABULARY.value.includes(word) ){
                VOCABULARY.value.push(word)
              }
            }
          })
 

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


  computeForTFIDF(sentence1,sentence2){
    
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
        dotProduct += this.BM25.calculateTFIDF(word, sentence1) * (this.BM25.calculateTFIDF(word, sentence2));
      }
    }
    
    const mag1 = Math.sqrt(words1.reduce((sum, word) =>{
      let tfidf = this.BM25.calculateTFIDF(word, sentence1)**2
      // return sum + ( VOCABULARY.value.includes(word) || words2.includes(word) ? bm25: bm25 * scaleFactor) 
      return sum + ( VOCABULARY.value.includes(word) ? tfidf: 0) 
    } , 0));

    const mag2 = Math.sqrt(words2.reduce((sum, word) => {
      let tfidf = this.BM25.calculateTFIDF(word, sentence2)**2
      return sum + ( VOCABULARY.value.includes(word) ? tfidf: 0) 
    } , 0));
    

    return dotProduct / (mag1 * mag2);
  }

  getReplyUsingTFIDFCosineSimilarity(msg){
  
    msg = removeRedundantSpaces(msg)

    let len = this.forwardIndex.length
    let max = this.forwardIndex[0]
    for ( let i = 1 ; i < len; i++){
      let next = this.forwardIndex[i]
      next.pattern = removeRedundantSpaces(next.pattern)

      if ( this.computeForTFIDF(msg,max.pattern) < this.computeForTFIDF(msg,next.pattern ) ){
        max = next
      }
    }

    let reply = null
    let score = this.computeForTFIDF(msg,max.pattern)
    // score = 0
    // console.log(`\tFrom Archive:: Cosine Max Pattern Found: ${JSON.stringify(max)}`)
    // console.log(`\t\tFrom Archive:: Cosine distance:: ${score}`)
    // if ( score > threshold)
    reply = this.memory[max.index].response[0]

    return {reply,score: score,pattern:max.pattern, rawPattern: max.rawPattern}
  }
  

  getReplyUsingCosineSimilarity(msg){

    msg = removeRedundantSpaces(msg)
    let len = this.forwardIndex.length
    let max = this.forwardIndex[0]
    for ( let i = 1 ; i < len; i++){
      let next = this.forwardIndex[i]
      next.pattern = removeRedundantSpaces(next.pattern)

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

    msg = removeRedundantSpaces(msg)

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
      next.pattern = removeRedundantSpaces(next.pattern)

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

    return {reply,score: score,pattern:max.pattern, rawPattern: max.rawPattern}
  }

  
  getReplyUsingVanillaCosineSimilarity(msg){

    msg = removeRedundantSpaces(msg)

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
      next.pattern = removeRedundantSpaces(next.pattern)
 
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

}

class WilcardArchive{
  
  constructor(){
    this.forwardIndex = [] // contains the index numbers

    this.memory = []  // stores the rules

    this.index = 0  // tracks the index number
  }

  getReplyUsingWildcardMatching(msg){

    // console.error(`Archive::getReplyUsingWildcardMatching:
    //             \n\tForward index length:${this.forwardIndex}`)
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
      let responseALength = a.rawPattern.split(' ').length
      let responseBLength = b.rawPattern.split(' ').length
      return responseBLength - responseALength
    }

    this.forwardIndex.sort(callback)
  }

  // key - the term with definition
  // value - an array of value
  storeMemory(rule){
    // rule must contain ([wildcard rules],[response],)
    
    let rawPatterns = rule.patterns

    rule.patterns.forEach((pattern,index)=>{
      
      let words = pattern.split(/\W+/g)
      // pattern.split(//g).
      // words.forEach(word=>{
      //   let sub = DICTIONARY.getSubstitute(word)
      //   if ( sub != null ){
      //     const regex = new RegExp("\\b" + word + "\\b", "g");
      //     // pattern = pattern.replace(regex,sub)
      //     rule.patterns[index] = rule.patterns[index].replace(regex,sub)
      //   }
      // })

      
      // lets store all words
      pattern.split(/\W/).forEach(word => {
        if ( !VOCABULARY.value.includes(word)) {
          VOCABULARY.value.push(word)
        }
      })

    })


    rule = {
      rawPattern: rawPatterns,
      patterns: rawPatterns,
      response: rule.response,
      index: this.index
    }

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
              pattern: transformWildcards(p), 
              // pattern:p,
              index: mem.index
            })    
          }
        })
      }
    })

  }

  printForwardIndex(){
    console.log(`WildcardArchive - Printing Forward Index:: ${this.forwardIndex.length}`)
    for ( let i = 0 ; i < this.forwardIndex.length; i++){
      let target = this.forwardIndex[i]
      let mem = this.memory[target.index]
      console.log(`\t${target.pattern}`)
    }
  }
  
}

export{
  Archive,
  WilcardArchive,
  VOCABULARY
}
// module.exports = ARCHIVE
"use strict"


// const { terms } = require("../data/diarrhea/definitions")
// const STACK = require("./stack")
import {STACK} from './stack'

// updating objects in array simultaneously while looping
// https://stackoverflow.com/questions/12482961/change-values-in-array-when-doing-foreach
let formatTopic = (unit)=>{
  return{
    topicName: unit.topicName,
    userResponses: unit.userResponses
  }
}

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
    this.references_untransformed = []

    //stores memories
    this.topics = []

    this.substitutions = []

    // contains all the topic in the stack..
    this.topicStack = new STACK()

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
    console.log("Removing refernece triggers")
    this.references.map((el,index)=>{
      el.pattern = el.pattern.replace(/[!]/,``)
    })
  }

  // findSubstitue
  findSubstitute(term){
    let sub
    // return term

    if ( term.match(`${this.TRIGGERS.SKIP_SUBSTITUTION}(\\w+)`)){
      console.log(`Found >> ${term} << Must skip`)
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
  
  //transform alFFINDl rules in topics
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

    console.log("Transforming topics")
    this.topics.map(ref=>{
      let userResponses = ref.userResponses
      if ( Array.isArray(userResponses) ){
        userResponses.map(res=>{
          res.pattern = transform(res.pattern)
        })
      }else{
        ref.userResponses = transform(ref.pattern)
      }
    })
    //transform all from topics
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
      memory: ()=>{
        console.log(`Memories in Archive : ${this.memory.length}`)
        this.memory.forEach(el=>{
          console.log(
            `\tindex: ${el.index}` +
            `\n\t\tpattern: ${el.pattern}` +
            `\n\t\tresponses: ${el.response}`+
            `\n\t\tnext topic: ${el.nextTopic}`
            )
        })
      },
      stack: ()=>{
        console.log(`Topic Stack`)
        console.log(this.topicStack.toArray())
      },
      topics: ()=>{
        this.topics.forEach(el=>{
          console.log(
            `\tTopic Name: ${JSON.stringify(el)}`)
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

  sortTopicResponses(){
    this.topics.userResponses.sort(function(a,b){
      // a and b are instance of BasicLines
      let basicLineAWordLength = a.pattern.split(' ').length
      let basicLineBWordLength = b.pattern.split(' ').length
      return basicLineBWordLength - basicLineAWordLength
    }) 
  }

  sortReferences(){
    
    let callback = (a,b)=>{
      // a and b are instance of BasicLines
      let responseALength = a.pattern.split(' ').length
      let responseBLength = b.pattern.split(' ').length
      return responseBLength - responseALength
    }

    // console.log(`User Responses: ` + this.topics.userResponses)
    // this.topics.userResponses.sort(callback)
    this.references.sort(callback)
  }


  storeTopics(unit){
    // you need to handle array later
    // this.topics.push(topic)

    if ( Array.isArray(unit) ){
      unit.forEach(el=>{
        this.topics.push(formatTopic(el))
      })
    }else{
      this.topics.push(formatTopic(unit))
    }
  }

  //stores substitution that will be used to 
  //normalize the words to a base representative 
  storeSubstitutions(data){
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
            this.references.push(
              formatReferences(el,currentValue.index)
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

  retrieve(msg){

    // normalize the terms by doing substitutions
    msg = this.normalizeString(msg)


    /** Begin check whether there is item in the head of the topic stack */    
    let headOfTopicStack = this.topicStack.peek()
    if ( headOfTopicStack != null ){

      /** Begin check whether the head of the topicstack is found in the existing topics*/   
      let topicIsDeclaredOnTheStack = this.topics.find(el=>el.topicName == headOfTopicStack) 
      if (topicIsDeclaredOnTheStack){

        /** Begin check whether user response is found on the decalred possible responses*/   
        let response = this.scanTopic(headOfTopicStack,msg)
        if (response === undefined){

          // the response should come from the expected answers...
          // this should not be declared by the user

          response = 
            `I am unable to understand your response.`+
            `I will repeat it once again. "${this.responseStack.peek()}"`  
        }/** Begin check whether user response is found on the decalred possible responses*/  
      
        return response
      
      }else{
        //error means current topic declared is not found
        console.log(`\tTerm [${topOfStack}] NOT found in the stack`)
        let error = 
          `Internal application error, ` +
          `topic [${topOfStack}] is missing`

        return error
      }/** End check whether the head of the topicstack is found in the existing topics*/ 

    }/** End check whether there is item in the head of the topic stack */ 


    /** For cases that ang level 1 (meaning conversations dont have responses to 
     *  other responses*/  
    let len = this.references.length

    let isMemoryFound = false

    let i = 0  //tracker reference 

    let ref //holds reference found


    /** Begin finding the matching singular memory*/
    while ( i < len ){

      // we are looking at references which holds the pattern and index
      ref = this.references[i]

      // i - With this flag the search is case-insensitive
      // g - With this flag the search looks for all matches
      // m - multiline mode
      
      // console.log("Reading Regex: "  + ref.pattern)
      
      // let regex = new RegExp(ref.pattern,"i")

      let regex = new RegExp(ref.pattern)

      // console.log(`Testing:: ${msg} || ${ref.pattern}`)
      // console.log(`Match?:: ${regex.test(msg)}`)
      
      if ( regex.test(msg) ){

        let regexMatch = msg.match(regex)
        // console.log("Attempting to capture group by porting function:")
        // captureGroups(msg,ref.pattern)
        this.storeLearnedData(regexMatch)

        isMemoryFound = true
        break;
      }

      i++
    }/** end finding the matching singular memory*/

    /** Begin scannin the potential responses by iteratin the indexes*/
    let response = ""
    if ( isMemoryFound ){
      
      let memoryUnit = this.memory[ref.index]
      let index = memoryUnit.timesRetrieved

      //check if pattern responsse is array or not
      //if array iterate trhough it, if not then
      //memoryUnit.response is the response
      if ( Array.isArray(memoryUnit.response)){
        
        // console.log("Memory as many response")
        //iterate in the responses
        if ( index < this.MAX_VARIATION ){

          response = memoryUnit.response[index]
        
          memoryUnit.timesRetrieved++  
  
        }else{
  
          //reset the index tracker of memory bak to zero
          memoryUnit.timesRetrieved = 0
          index = memoryUnit.timesRetrieved 
          response = memoryUnit.response[index]
  
          //increment the index
          memoryUnit.timesRetrieved++
        }

      }else{
        response = memoryUnit.response
      }

      /** Begin scanning the learned memory and replacing the dictionary 
       * if term exist */
      // you found the response.. next lets replace the trigger
      // according to learned data . this time we use "=learnedName" as trigger
      const responseRegExLearnedData = new RegExp("=(\\w+)","igm")
      if ( responseRegExLearnedData.test(response) ){

        console.log("found something to be replaced")
        // it effectively empties the value 
        const regexp = new RegExp('=(\\w+)','img');
        const matches = response.matchAll(regexp);
        
        //construct responses by getting saved data from memories
        for (let [match] of matches) {
          let flag = match.replace("=","").toLowerCase()
          let fromMemory = this.learnedData.get(flag)
          
          if ( fromMemory != undefined ){
            response = response.replace(match,fromMemory)
          }else{
            // this will return the classes without values
            //to counter them, we do this
            response = response.replace(match,"")
          }
        }

      }  /** end scanning learnedMemory*/

      /** Begin scanning the dictionary and replacing the dictionary 
       * if term exist */
      const responseRegExDictionaryAccess = new RegExp("#(\\w+)","igm")
      if ( responseRegExDictionaryAccess.test(response) ){
        const regexp = new RegExp('#(\\w+)','img');
        const matches = response.matchAll(regexp);
        
        //construct responses by getting saved data from learned data
        for (let [match] of matches) {
          let flag = match.replace("#","").toLowerCase()
          
          //find the corresponding term that is saved in the learnedmemeory
          //this returns the indicating term.. 
          //example in msg: "what is [term]" , the work term is saved in the learned
          // memory. in the response will be something like #term.. so we need to 
          // remove # hash.. then we get the word term. 
          // but remember we already caputed the value of term and placed them in 
          // the learned memory.. we need to return the value of corresponding value of term
          // example term: potato, we get potato. 
          // afterwards we scan the dictionary..  
          let fromLearnedData = this.learnedData.get(flag)


          // console.log(`Checking from learned data:: ${fromLearnedData}`)
          //find the object that matches in the dictioanry
          let fromDictionary = this.dictionary.find(term=>{
            
            // console.log(`Found working [term]: ${term.term}` +
            // `\nFound from learned data: ${fromLearnedData}`)
            if (new RegExp(term.term).test(fromLearnedData)){
              console.log(`Found working [term]: ${term.term}` +
              `\nFound from learned data: ${fromLearnedData}`)
            //   return true
            }

            // console.log(`<<<< ${term.term}`)
            
            return (new RegExp(term.term).test(fromLearnedData))
          })

          //if the object has returned anything          
          if ( fromDictionary != undefined ){
            console.log("<< Found " + fromDictionary.definition)
            response = response.replace(match,fromDictionary.definition)
          
          }else{
            // this will return the classes without values
            //to counter them, we do this
            response = response.replace(match,"")
          }
          response = response.replace(match,fromDictionary)

          
        }
      }
      /** end scanning dictionary*/

      // console.log(`\tHere is what we found << ${response}`)
      // let headOfStack = memoryUnit.nextTopic
      // console.log(`Head of stack << ${memoryUnit.nextTopic}`)
      this.topicStack.push(memoryUnit.nextTopic)
    }
    /** End scannin the potential responses */

    // console.log(`\tPutting [${response}] to response stack`)
    this.responseStack.push(response)
    // console.log(`\tResponse stack:: ${JSON.stringify(this.responseStack)}`)
    // console.log(`Chat Response << ${response}`)

    return isMemoryFound ? response : "not found"
  }

  getDictionary(term){

    // let res = this.dictionary.find(el=>el.term.match(term))
    // console.log(`Dictionary Test for >> ${term}`)
    // console.log(`Found definition of ${term} << ${res.definition}`)
    return this.dictionary[term]
  }

  scanTopic(topicName,msg){
    //search topic that matches.. 
    
    let i = 0
    let topicLength = this.topics.length
    let agentResponse = undefined

    while( i < topicLength ){

      // you need to keep track of topic unit
      let topicUnit = this.topics[i]
      
      console.log(`Finding [${topicName}] in Topic Stack`)

      if ( topicName === topicUnit.topicName ){
        //found the right topic

        console.log(`\tFound Topic:: ${topicName}`)

        //check if msg corresponds to the right topic.
        let k = 0
        let userResponsesLength = topicUnit.userResponses.length
    
        //this is an array
        let userResponses = topicUnit.userResponses

        //holds the value if has next topic
        let nextTopic

        // console.log(`\tTopic Unit value:  [${JSON.stringify(topicUnit)}] `)
        
        console.log(`\tFinding response for [${msg}] `)
        //iterate through
        //search the possible user responses
        while( k < userResponsesLength ){

          let unit = userResponses[k]
          let pattern = unit.pattern
          let regex = new RegExp(pattern,"gmi")
        
          if ( regex.test(msg) ){
            //found corresponding response
            agentResponse = unit.response
            nextTopic = unit.nextTopic

            console.log(`\t\tNext Topic:: ${nextTopic}`)
            // if has value
            if ( nextTopic != undefined){
              this.topicStack.push(nextTopic)
            }else{
              console.log("\t\tShould be ending the stacking")
              this.topicStack.clear()
            }
            //if matched then stop

            break
          }

          k++
        }

        if ( agentResponse != undefined ){

          //store this so we can access it later
          console.log(`Putting [${agentResponse}] to response stack`)
          this.responseStack.push(agentResponse)
          console.log(`\tFound response for [${msg}] is [${agentResponse}]`)
          console.log(`\tFound next topic [${nextTopic}]`)
          
        }

       
        //since found stop finding topic
        break;
      }

      i++
    }

    return agentResponse
  }


}

export{
  ARCHIVE
}
// module.exports = ARCHIVE
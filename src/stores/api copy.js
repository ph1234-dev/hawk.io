import { ref, computed, reactive, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

import {data as firstIterationData}  from "@/data/first-iteration.js"
import {data as secondIterationData}  from "@/data/second-iteration.js"
import {data as thirdIterationData}  from "@/data/third-iteration.js"

import Engine from '@/api/engine'

export const useBackendAPI = defineStore('backend', () => {

  // let userInitialValue = {
  //   id: '',
  //   name: '',
  //   authenticated: false,
  //   token: ''
  // }

  // let user = reactive(userInitialValue)

  const URL_BASE = "http://127.0.0.1:5000"
  // const URL_BASE = "https://flask.activlab.pro"

  // const URL_REGISTER = `${URL_BASE}/user/api/register`
  // const URL_LOGIN = `${URL_BASE}/user/api/login`
  // const URL_STORE_LOG = `${URL_BASE}/log/api/post`
  // const URL_PREDICT_LANGUAGE = `${URL_BASE}/classify/api/predict`
  const URL_TEST_RECORDS = `${URL_BASE}/log/api/store`

  // FINAL USABILITY
  const GENERATE_USER_TESTER_ID = `${URL_BASE}/log/api/generate_unique_tester_id`
  // const RECORD_USABILITY_TEST_CONVERSATIONS = `${URL_BASE}/log/api/generate_unique_tester_id`

  // REQUEST ID IMMEDIATELY AFTER LOADING

  let userUniqueIdentifier = ref()

  const key = 'uniqueUserIdentifier'

  if (localStorage.getItem(key) !== null) {
    let storedValue = localStorage.getItem(key)
    userUniqueIdentifier.value = storedValue
    console.log(storedValue)
    console.log(navigator.userAgent)

    // alert('Retrieving Unique User Identifier from local storage: ', storedValue)
  } else {

    let idRequest = fetch(GENERATE_USER_TESTER_ID, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        "userAgent": (navigator.userAgent ? navigator.userAgent : "none")
      })
    });


    // requestData(GENERATE_USER_TESTER_ID)
    idRequest
      .then(response => response.json())
      .then(data => {
        // alert(JSON.stringify(data));
        // alert(data.id)
        userUniqueIdentifier.value = data.id
        console.log('Storing Unique User Identifier from local storage: ', data.id)
        localStorage.setItem(key, data.id)
      })
      .catch(error => {
        console.error('Failed to get generated end user id from server', error);
      });
  }



  let ENGINE = new Engine()

  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"))
  }


  // https://www.youtube.com/watch?v=059fh7Gobho
  // persisting vue pinia using watch
  // watch(user,userVal=>{
  //   localStorage.setItem("user",JSON.stringify(userVal))
  // },{deep:true})
  // // adding deep is true here meaning we will track depe changes


  // watch(ENGINE_LOADED,val=>{
  //   localStorage.setItem("ENGINE_LOADED",JSON.stringify(val))
  // },{deep:true})


  let getReply = (msg) => {
    let reply = "response wasn't found"

    reply = ENGINE.getReply(msg)

    try {
      storeLog(reply, localStorage.getItem(key))
    } catch (e) {
      console.log('Error:api.js -> Failed to send data to server')
    }

    // console.log(`Getting reply for ${msg}\n\tResponse: ${reply}`)
    return reply
  }

  let storeLog = async (result, id) => {

    let data = {
      "userMessage": result.userMessage,
      "reply": result.reply,
      "lang": result.lang,
      // "dimensionCode":  result.dimensionCode,
      // "dimensionLabel":  result.dimensionLabel,
      "pattern": result.pattern,
      "patternMatchingMethod": result.patternMatchingMethod,
      "testNumber": id,
      "score": result.score,
      "reconstructedMessage": result.reconstructed,
      "originalPatternFound": result.originalPatternFound
    }


    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify(data);

    let response = await fetch(URL_TEST_RECORDS, {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    let xxx = await response.text();
    console.log(xxx);

  }




  let beginDevTest = async () => {
    let testData = [].concat(ENGINE.getTestCases())
    // let testData = []
    let payload = []
    console.log('Begin Testing with VuePinia')
    console.log('api::useBackendAPI::beginDevTest() ')
    console.log('Total Test Cases: ', testData.length)

    let testMax = 15
    for (let i = 0; i < testData.length; i++) {

      // stop case
      // if ( i > testMax ) break;
      let test = testData[i]
      let result = ENGINE.getReply(test)


      // if ( i < testMax ){
      //   console.log(`${JSON.stringify(result)}`)
      // }

      let data = {
        "userMessage": result.userMessage,
        "reply": result.reply,
        "lang": result.lang,
        // "dimensionCode":  result.dimensionCode,
        // "dimensionLabel":  result.dimensionLabel,
        "pattern": result.pattern,
        "patternMatchingMethod": result.patternMatchingMethod,
        "testNumber": 13,
        "score": result.score,
        "reconstructedMessage": result.reconstructed,
        "originalPatternFound": result.originalPatternFound
      }


      // console.log(`[${i}] Input: ${test}`)
      console.log(`\tTest Result:: ${JSON.stringify(data)}`)

      // if (result.originalPatternFound == undefined){
      //   console.log('xx >> Error found in: ', JSON.stringify(data))
      // }
      payload.push(data)
      // requestData(URL_TEST_RECORDS,data,'POST') 
      // console.log(JSON.stringify(JSON.stringify(load))
      // console.log('i:: ', i)
    }

    // IMPORTANT NOTE:: test numbers
    // 5 was the previous - before may 30
    // 6 was the previous - May 30
    // 7 was the previous - June 5 - 
    // improvements on the regext wildcard expressions and fixes on the responses/paterns/manual optimizaiton of rules
    // improved weighted cosine similarity scoreing with thresholds/priority word detection/etc..

    // 8 - JUNE 7 .. OPTIMIZATION AND FIXING OF ERROS REMOVED REDUNDANT RULES AND DESTRUCTURE SOME OF THE PATTERNS TO FIX SOME ERRORS
    // further optimized the rule and removed redundant like fever in NSAIDs 

    // 9 - improvements on the searchinng and making queries a little atomic
    // 10 - has improvements june 13
    // 11 - is a tf (traditional) cosine similarity
    // 12 - august 13 test for cosine similarity (something wrong with th ecomputation of idf here where Math.log(((N+1)/(df+1)+ 1)) - final
    // 13 - final sklearn implementation

    // console.log('Store::API - Bulk Test:: Total Payload:: ', payload.length)

    // requestData(URL_TEST_RECORDS,payload,'POST')
    //     .then((data) => {
    //       console.log(data); // JSON data parsed by `data.json()` call
    //     })
    //     .catch(e => {
    //       console.error('Action: Attempted to store log into server. It was Executed but error was found. ' ,e)
    //     });


  }

  // we can automate the scoring 
  // we know what should be the target response bec ause we know where 
  // we defined the test item
  // target  = reply block number (we can check this through the rule index.. or the memory index it retrieves)
  // if true, the answer is correct
  // beginDevTest()
  








  // store actual data

  let storeActualData =  (data,testCycle) => {

    let payload = []
    
    data.forEach((d,index)=>{
      
      let result = "response wasn't found"
      result = ENGINE.getReply(d.message)

      let data = {
        "user_message": result.userMessage,
        "reply": result.reply,
        "lang_predicted": result.lang,
        "pattern": result.pattern,
        "pattern_matching_method": result.patternMatchingMethod,
        "score": result.score,
        "reconstructed_message": result.reconstructed,
        "original_pattern": result.originalPatternFound,
        "test_cycle": testCycle,
        "user_id": d.id,
        "disease": d.disease,
        "lang_correct": d.lang,
        "question_number": d.question_number
      }

      payload.push(data)
    })

  
    // console.log(data)
    console.log('API:: Store Log:: sample')
    payload.forEach((p,index)=>{
      if ( index < 5){
        console.log(`API:: Payload item:: ${JSON.stringify(p)}`)
      }
    })

    console.log('API::store Attempting to push to server')
    requestData("http://127.0.0.1:5000/log/api/store",JSON.stringify(payload),'POST') 

  }

  let initializeActualDataPrompts = async()=>{
    
    // userid,q1,lang,disease,input,reply

    
    let looper = (data,testCycle)=>{

      let prompts = []

      let questionIterator = (id,disease,question,number)=>{
        question.forEach((q,index)=>{
          let lang = ''
          switch(index){
            case 0: lang = 'ENG'; break;
            case 1: lang = 'FIL'; break;
            case 2: lang = 'MAG'; break;
          }
          
          prompts.push({
            id: id,
            disease: disease,
            message: q,
            lang: lang,
            question_number: number,
          })

        })

      }


      data.forEach(d=>{
        questionIterator(d.id,d.disease,d.q1,1)
        questionIterator(d.id,d.disease,d.q2,2)
        questionIterator(d.id,d.disease,d.q3,3)
        questionIterator(d.id,d.disease,d.q4,4)
        questionIterator(d.id,d.disease,d.q5,5)
        questionIterator(d.id,d.disease,d.q6,6)
        questionIterator(d.id,d.disease,d.q7,7)
      })

      alert('we are here')
      storeActualData(prompts,testCycle)
    }


    // using bm25 weighted cosine
    // looper(firstIterationData,1)
    // looper(secondIterationData,2)
    // looper(thirdIterationData,3)
    // looper(thirdIterationData,4)


    // using regular cosine 
    // looper(firstIterationData,11)
    // looper(secondIterationData,12)
    // looper(thirdIterationData,13)

    
    // using tfidf cosine 
    // looper(firstIterationData,21)
    // looper(secondIterationData,22)
    // looper(thirdIterationData,23)


    // using bm25 cosine (wrong ignore)
    // looper(firstIterationData,-1)
    // looper(secondIterationData,-2)
    // correct responses remmber the third iteration is the 4th number since that was what we fixed before


    
    // using bm25 cosine (w ignore)
    //looper(firstIterationData,31)
    //looper(secondIterationData,32)    
    // later you need to rerun the previous test...
    // rerun bm25 first and second iteration only

  }


  // initialize the data gathered from the survey
 initializeActualDataPrompts()


  // you need to rerun the test casese
  // first and second iteration 1 and 2 with the new improve algorithm so then u can only
  // compare bm25 performance with regular cosine similarity 


  return {
    storeLog,
    getReply,
  }
})

// CHECKS IF APP IS ONLINE OR OFFLINE
// https://stackoverflow.com/questions/189430/detect-the-internet-connection-is-offline
// console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line ' + window.navigator.onLine);

window.addEventListener('online', () => console.log('Became online ', window.navigator.onLine));
window.addEventListener('offline', () => console.log('Became offline'));



async function requestData(url = '', data = {}, operation = 'GET', token = '') {


  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
  }

  // console.log(`JSON passed: ${data}`)

  // Default options are marked with *
  const response = await fetch(url, {
    method: operation, // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin ("YOu need to specify "no cors" so that server can read the data)
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    body: data, // body data type must match "Content-Type" header
    headers: headersList,
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify({"user_id": 1, "message": "hello world", "reply": "no rep"})
  });
  return response; // parses JSON response into native JavaScript objects
}

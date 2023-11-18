import { ref, computed ,reactive} from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

import Engine from '@/api/engine'

export const useBackendAPI = defineStore('backend', () => {

  let userInitialValue = {
    id: '',
    name: '',
    authenticated: false,
    token: ''
  }

  let user = reactive(userInitialValue)

  // const URL_BASE = "http://flask.activlab.pro/"
  const URL_BASE = "http://127.0.0.1:5000"
  const URL_REGISTER = `${URL_BASE}/user/api/register`
  const URL_LOGIN = `${URL_BASE}/user/api/login`
  const URL_STORE_LOG = `${URL_BASE}/log/api/post`
  const URL_PREDICT_LANGUAGE = `${URL_BASE}/classify/api/predict`
  const URL_TEST_RECORDS = `${URL_BASE}/test/api/store`
  
  const ENGINE = new Engine()


  if (localStorage.getItem("user")){
    user = JSON.parse(localStorage.getItem("user"))
  }

  // https://www.youtube.com/watch?v=059fh7Gobho
  // persisting vue pinia using watch
  // watch(user,userVal=>{
  //   localStorage.setItem("user",JSON.stringify(userVal))
  // },{deep:true})
  // // adding deep is true here meaning we will track depe changes

  let router = useRouter()
  let logoutUserAccount = ()=>{
    localStorage.removeItem("user")
    user.id = ''
    user.name = ''
    user.authenticated = false
      router.push({
        name: 'home'
    })
  }

  let loginUserAccount = async (username, password)=>{
    let data = {
      "username": username,
      "password": password,
    }

    // let response = await requestData(URL_LOGIN, data, 'POST');
    // let responseData = await response.json()
    // user.id =responseData.id
    // user.name =responseData

    let status = true
    await requestData(URL_LOGIN, data, 'POST')
      .then(data=>{
        if ( data.status != 200){
          console.error('erorr happend')
          status = false
          return
        }
        return data.json()
      }).then(responseData=>{
          // console.log(resolvedData)
          user.id = responseData.id
          user.name = responseData.name
          user.authenticated = true
          user.token = responseData.token
          // console.log(`Received User Token: ${user.token}`)
      }).catch(e=>{
        console.log(`Call to API_ENDPOINT failed`, e)
        status = false
      })

      return status
  }

  let registerUser = async (username, password, name) => {
    // console.log(`Unimplemented [registerUser] - ${username} ${password} ${name}`)
    let data = {
      "username": username,
      "password": password,
      "name": name,
    }

    let status = await requestData(URL_REGISTER, data, 'POST')
      .then((data) => {
        return data.json()
      }).then((data)=>{
        user.id =data.id
        user.name =data.name
        user.authenticated = true
        user.token = data.token
        console.log(data)
        
        //meaning query was accepted 
        return true
      }).catch(e=>{
        console.error("Could not register user data, ",e)
        // return false means there was an error 
        return false
      })
      // console.log(`Status from api: ${status}`)
    return status
  }

  let storeLog = (userMessage, botReply, lang="not specified due to test") => {
    
    let data = {
      user_id: user.authenticated ? user.id: 6,
      message: userMessage,
      reply: botReply,
      predicted_message_language: lang
    }


    requestData(URL_STORE_LOG, data, 'POST', user.token)
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      })
      .catch(e => {
        console.error('Action: Attempted to store log into server. It was Executed but error was found. ' ,e)
      });

    
    // Read This
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // Example POST method implementation:
  }

  let getLanguage = async (msg) => {
    let status = window.navigator.onLine
    let lang = "unspecified"
    // lets make status false for testing purposes
    status = false
    if (status) {
      //connect to backend            
      // let data = { "message": msg}

      // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
      // await requestData(URL_PREDICT_LANGUAGE,data,'POST',user.token)
      //   .then((response)=>{
      //     // first then returns a promise
      //     if (!response.ok) {
      //       throw new Error(`HTTP error: ${response.status}`);
      //     }
      //     // return here is the value of the resolve
      //     // this returns a promise to lets resolve it and chain 
      //     // its value on the next then just like a promise
      //     return response.json();
      //   }).then((data)=>{
      //     lang = data.lang
      //   }).catch((err) => console.error(`Fetch problem: ${err.message}`));
      
    } else {
      // else use engine predict
      lang = ENGINE.getLanguage(msg)
    }

    // console.log(`Retrieving language: `, lang)
    return lang
  }

  let getReply = async (msg) => {
    let reply = "response wasn't found"
    
    // step 1 identify language
    let identifyLanguage = new Promise((resolve,reject)=>{
      let lang = getLanguage(msg)
      console.log('Promise Lang: ', lang)
      resolve(lang)
    }).then((response)=>{
      return response
    }).catch(e=>{
      console.error(`Something went wrong. Error detected in classifying langauge. `,e)
      return 'unspecified due to errors'
    })

    let lang = await identifyLanguage
    console.log(`Test:\n\tUser message: ${msg}\n\tPredicted Language: ${lang}`)
 
    // step 2 retrieve 

    let identifyResponse = new Promise((resolve, reject) => {
      reply = ENGINE.getReply(msg,lang)
      resolve(reply)
    }).then(response => {
      console.log(`Retrieving reponse for msg: ${msg}`)
      console.log(`Target language rules: ${lang}`)
      return response
    }).catch(e=>{
      console.log(`Something went wrong. Error detected in getting reply, ${e}`)
    })

    reply = await identifyResponse

    // console.log(`Getting reply for ${msg}\n\tResponse: ${reply}`)
    return {
      lang,
      reply
    }
  }

  let beginDevTest = async() =>{
    let testData = [].concat(ENGINE.getTestCases())
    // let testData = []
    let payload = []
    console.log('Begin Testing with VuePinia')
    console.log('api::useBackendAPI::beginDevTest() ')
    console.log('Total Test Cases: ',testData.length)

    let testMax = 15
    for ( let i=0; i < testData.length; i++){
      
      // stop case
      // if ( i > testMax ) break;
      let test = testData[i]
      let result = ENGINE.getReply(test)
      
     
      // if ( i < testMax ){
      //   console.log(`${JSON.stringify(result)}`)
      // }
      
      let data = {
        "userMessage": result.userMessage ,
        "reply": result.reply,
        "lang":  result.lang,
        // "dimensionCode":  result.dimensionCode,
        // "dimensionLabel":  result.dimensionLabel,
        "pattern":  result.pattern,
        "patternMatchingMethod":  result.patternMatchingMethod,
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

  return {
    storeLog,
    registerUser,
    getReply,
    user,
    loginUserAccount,
    logoutUserAccount
  }
})

// CHECKS IF APP IS ONLINE OR OFFLINE
// https://stackoverflow.com/questions/189430/detect-the-internet-connection-is-offline
// console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line ' + window.navigator.onLine);

window.addEventListener('online', () => console.log('Became online ', window.navigator.onLine));
window.addEventListener('offline', () => console.log('Became offline'));


async function requestData(url = '', data = {}, operation = 'GET',token='') {
  // console.log(`JSON passed: ${data}`)

  // Default options are marked with *
  const response = await fetch(url, {
    method: operation, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify({"user_id": 1, "message": "hello world", "reply": "no rep"})
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}

async function requestDataButNotStringified(url = '', data = {}, operation = 'GET',token='') {
  // console.log(`JSON passed: ${data}`)

  // Default options are marked with *
  const response = await fetch(url, {
    method: operation, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify({"user_id": 1, "message": "hello world", "reply": "no rep"})
    body: data// body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}
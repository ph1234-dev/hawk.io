import { ref, computed ,reactive,watch} from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

import Engine from '@/api/engine'

export const useBackendAPI = defineStore('backend', () => {

  let userInitialValue = {
    id: '',
    name: '',
    authenticated: false
  }
  let user = reactive(userInitialValue)

  const URL_BASE = "http://127.0.0.1:5000"
  const URL_REGISTER = `${URL_BASE}/user/api/register`
  const URL_LOGIN = `${URL_BASE}/user/api/login`
  const URL_STORE_LOG = `${URL_BASE}/log/api/post`
  const URL_PREDICT_LANGUAGE = `${URL_BASE}/classify/api/predict`
  
  const ENGINE = new Engine()


  if (localStorage.getItem("user")){
    user = JSON.parse(localStorage.getItem("user"))
  }

  // https://www.youtube.com/watch?v=059fh7Gobho
  // persisting vue pinia using watch
  watch(user,userVal=>{
    localStorage.setItem("user",JSON.stringify(userVal))
  },{deep:true})
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
    await requestData(URL_LOGIN, data, 'post')
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
      }).catch(e=>{
        console.log(`Call to API_ENDPOINT failed`, e)
        status = false
      })

      return status
  }

  let registerUser = (username, password, name) => {
    // console.log(`Unimplemented [registerUser] - ${username} ${password} ${name}`)
    let data = {
      "username": username,
      "password": password,
      "name": name
    }

    requestData(URL_REGISTER, data, 'POST')
      .then((data) => {
        return data.json()
      }).then((data)=>{
        user.id =data.id
        user.name =data.name
        user.authenticated = true
        console.log(data)
      }).catch(e=>{
        console.error("Could not register user data, ",e)
      })
  }

  let storeLog = (userID, user, bot) => {
    // console.log("callings store log")
    // 
    let data = {
      user_id: userID,
      message: user,
      reply: bot
    }

    requestData(URL_STORE_LOG, data, 'POST')
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
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
      let data = { "message": msg}

      https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
      await requestData(URL_PREDICT_LANGUAGE,data,'POST')
        .then((response)=>{
          // first then returns a promise
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          // return here is the value of the resolve
          // this returns a promise to lets resolve it and chain 
          // its value on the next then just like a promise
          return response.json();
        }).then((data)=>{
          lang = data.lang
        }).catch((err) => console.error(`Fetch problem: ${err.message}`));
      
    } else {
      // else use engine predict
      lang = ENGINE.getLanguage(msg)
    }

    // console.log(`Retrieving language: `, lang)
    return lang
  }

  let getReply = async (msg) => {
    let reply = "response wasn't found"
    
    let identifyLanguage = new Promise((resolve, reject) => {
      let lang = getLanguage(msg)
      resolve(lang)
    }).then(response => {
      let lang = response
      console.log(`Attempting to predict lang using: `, lang)
      reply = ENGINE.getReply(msg,lang)
      console.log(`Response from getReply[API] => ${reply}`)
    }).catch(e=>{
      console.log(`err from getReply[API] => ${e}`)
    })

    await identifyLanguage

    console.log(`Getting reply for ${msg}\n\tResponse: ${reply}`)
    return reply
  }

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
console.log('Initially ' + (window.navigator.onLine ? 'on' : 'off') + 'line ' + window.navigator.onLine);

window.addEventListener('online', () => console.log('Became online ', window.navigator.onLine));
window.addEventListener('offline', () => console.log('Became offline'));

async function requestData(url = '', data = {}, operation = 'GET') {
  // console.log(`JSON passed: ${data}`)

  // Default options are marked with *
  const response = await fetch(url, {
    method: operation, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify({"user_id": 1, "message": "hello world", "reply": "no rep"})
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}
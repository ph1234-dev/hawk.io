import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useBackendAPI = defineStore('backend',()=>{


  let registerUser = (username,password,name)=>{
    let url = "http://url"
    console.log(`Unimplemented [registerUser] - ${username} ${password} ${name}`)
  }

  let storeLog = (userID,user,bot) =>{
    // 
    let data = {
      "user": a,
      "bot": b,
      "userId": userId
    }

    postData('https://example.com/answer', data,'POST')
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });

    // Read This
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    // Example POST method implementation:
  }
  
  return {
    storeLog,
    registerUser
  }
})

async function postData(url = '', data = {},operation='GET') {
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
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
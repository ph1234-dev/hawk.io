import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import {data as firstIterationData}  from "./data/first-iteration.js"
import {data as secondIterationData}  from "./data/second-iteration.js"
import {data as thirdIterationData}  from "./data/third-iteration.js"

import {DICTIONARY} from '@/api/config/dictionary'





// const loader = createApp(Loader)
// loader.mount('#app')

// const ENGINE = new Engine()

// app.config.globalProperties
// An object that can be used to register 
// global properties that can be accessed on any
//  component instance inside the application.
// to set: app.config.globalProperties.msg = 'hello'
// to use: console.log(this.msg) // 'hello'


// https://www.vuemastery.com/blog/refresh-proof-your-pinia-stores/
// persist pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedState)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/service-worker.js')
//       .then(registration => {
//         console.log('Service Worker registered with scope:', registration.scope);
//       })
//       .catch(error => {
//         console.error('Service Worker registration failed:', error);
//       });
//   }
  

// process data
// first iteraion

let arr = []
let getUniqueTokens = (data)=>{
  // console.log(data)

  let loopDat  = (internalArray)=>{
    internalArray.forEach(a=>{

      
      a.split(' ').forEach(token=>{
        token = token.toLowerCase().trim() 
        
        let word = DICTIONARY.getSubstitute(token)
        if ( word == null ){ // word not found in dictionary so its unique and should be addded
          if (!DICTIONARY.isStopWord(token.trim())){
            if (!arr.includes(token)){
              arr.push(token)
            }
          }
        }
        
      })
    })
  }

  data.forEach(d=>{
    loopDat(d.q1)
    loopDat(d.q2)
    loopDat(d.q3)
    loopDat(d.q4)
    loopDat(d.q5)
    loopDat(d.q6)
    loopDat(d.q7)
  })

  
}
arr.sort((a, b) => a.length - b.length)

// getUniqueTokens(firstIterationData)
// getUniqueTokens(secondIterationData)
// console.log(`First Iteration length:: ${arr.length} `)
// console.log(`First Iteration Data:: ${arr} `)

  
// getUniqueTokens(secondIterationData)
// console.log(`second Iteration length:: ${arr.length} `)
// console.log(`second Iteration Data:: ${arr} `)


  getUniqueTokens(thirdIterationData)
  console.log(`third Iteration length:: ${arr.length} `)
  console.log(`third Iteration Data:: ${arr} `)
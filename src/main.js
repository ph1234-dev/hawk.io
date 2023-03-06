import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import piniaPluginPersistedState from "pinia-plugin-persistedstate"

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

 
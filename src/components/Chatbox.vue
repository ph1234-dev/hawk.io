<script setup>

import {ref,watch,onMounted,nextTick } from 'vue'

import { useBackendAPI } from '../stores/api';

let msg = ref('')
let userMessages = ref([])
let store = useBackendAPI()

let chatboxContainer = null

let sendMessage = async () => {

    let retrieveResponse = new Promise((resolve,reject)=>{
        let reply = store.getReply(msg.value)
        console.log("Trying to get reply")
        resolve(reply)
    }).then(response=>{
        console.log("\nResponse found: ", response)
        store.storeLog(1,msg.value,response)
        userMessages.value.push({
            "bot": response,
            "user": msg.value
        })
    }).catch(e=>{
        console.log(`Found error: `, e)
    })

    await retrieveResponse
}



onMounted(() => {
    chatboxContainer = document.querySelector('.chatbox-message-container')
})

// side effect of update is to change the DOM next
// you can achieve this by calling nextTick to indicate 
// that you need to school down explicitly
// this can also be done with async and await...
// but this is so much clener
watch(userMessages.value,function(){
    https://stackoverflow.com/questions/70276948/when-data-is-changed-within-the-watch-function-dom-does-not-update
    nextTick(()=>{
        let lastElement = chatboxContainer.lastElementChild
        let topPos = lastElement.offsetTop;
        chatboxContainer.scrollTop = topPos;
    })
})

</script>

<template>
    <div id="app-chatbox" class="chatbox">
        <div class="chatbox-nav">
            <span class="chatbox-nav-time">11:00 PM</span>
            <span class="chatbox-nav-status"><i class="icon-connection" style="font-size: .8em"></i>Online</span>
            <span class="chatbox-nav-title">
                <span style="display:flex">
                    <div style="display: flex; direction: column">
                        <p>Hawk Chatbot</p>
                    </div>
                </span>
            </span>
            <span class="chatbox-nav-actions">
                <!-- <i class="icon-hawk"></i> -->
                <i class="icon-menu" @click.stop="showNavOverlay"></i>
            </span>
        </div>
        <div class="chatbox-message-container">
            <span class="chatbox-message-chatbot">
                How are you?
            </span> 
            
            <template v-for="item in userMessages">
                <div class="chatbox-message-user">{{ item.user }}</div> 
                <div class="chatbox-message-chatbot">{{ item.bot }}</div>
            </template>
        </div>
        <div class="chatbox-actionbar">
            <input 
                class="chatbox-action-text-input"
                type="text" 
                v-model="msg"
                placeholder="Type a message"
                > 
            <button
                class="chatbox-action-send"
                @click.stop = sendMessage()
                :disabled="msg == ''"
                >
                <i class="icon-envelop icon-marginless"></i>
            </button>   
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

.icon-menu{
    display: block;
}

@media screen and (min-width: 425px) {
    .icon-menu{
        display: none;
    }
}

</style>
<script setup>

import {ref,watch,onMounted,nextTick } from 'vue'
import { useBackendAPI } from '@/stores/api';

let msg = ref('')
let userMessages = ref([])
let store = useBackendAPI()

let chatboxContainer = null

let sendMessage = async () => {

    let query = new Promise((resolve,reject)=>{
        let response = store.getReply(msg.value)
        resolve(response)
    }).then((response)=>{
        return response
    }).catch(e=>{
        console.error('Something went wrong. Found Error in UI when retrieving reply and storing them to backend')
    })

    let response = await query
    let {reply,lang} = response
    store.storeLog(msg.value,reply,lang)
    // console.log(`Storing Log:\n\tMsg: ${msg.value}\n\tLang: ${lang}\n\tReply: ${reply}`)
    userMessages.value.push({
        // reply here is an object so wer need to return reply.reply
        "bot": reply,
        "user": msg.value
    })

    msg.value = ""
}


let showNavOverlay = () =>{

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

let showOverlay = ()=>{
     
    let el = document.querySelector(".nav-overlay")
    
    let style = el.style.display 
    if (style=="flex"){
        el.style.display="none"
    }else{
        el.style.display="flex"
        el.style.borderBottom = "3px inset rgba(50, 49, 53,.7)"
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

}

</script>

<template>
    <div id="app-chatbox" class="chatbox">
        <div class="chatbox-nav">
            <!-- <span class="chatbox-nav-header-label">Test</span>
            <span class="chatbox-nav-status"><i class="icon-connection" style="font-size: .8em"></i>Online</span> -->
            <span class="chatbox-nav-title">
                <span style="display:flex">
                    <div style="gap: 1em">
                        <strong>Hawk Chatbot <span class="icofont-comment"></span></strong>
                    </div>
                </span>
            </span>
            <span class="chatbox-nav-actions">
                <!-- <i class="icon-hawk"></i> -->
                <i class="icofont-navigation-menu" @click.stop="showOverlay"></i>
            </span>
        </div>
        <div class="chatbox-message-container">
            <p class="chatbox-message-chatbot">
                How are you?
            </p> 
            
            <template v-for="item in userMessages">
                <p class="chatbox-message-user">
                    {{ item.user }}
                </p> 
                <p class="chatbox-message-chatbot">
                    {{ item.bot.reply }}
                </p>
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
                <i class="icofont-reply icon-marginless"></i>
                <!---->
            </button>   
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

.chatbox-nav-actions{
    display: flex;
}
.icon-menu{
    display: block;
}


@media screen and (min-width: 768px) {

    .chatbox-nav-actions{
        display: none !important;
    }
}

.chatbox{
    // min-width: 100%;
    // box-shadow: 0px 2px 4px rgba(235, 235, 235, 0.5);
    // background-color: white;
}

</style>
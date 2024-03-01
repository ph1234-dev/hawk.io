<script setup>

import { ref, watch, onMounted, nextTick } from 'vue'
import { useBackendAPI } from '@/stores/api';
import ChatboxUserMessage from './ChatboxUserMessage.vue';
import ChatboxChatbotMessage from './ChatboxChatbotMessage.vue';

let msg = ref('')
let userMessages = ref([])
let store = useBackendAPI()

let userMessagesChatboxElements = ref([])

let chatboxContainer = null

let sendMessage = async () => {


    // let query = new Promise((resolve, reject) => {
    //     let response = store.getReply(msg.value)
    //     resolve(response)
    // }).then((response) => {
    //     return response
    // }).catch(e => {
    //     console.error('Something went wrong. Found Error in UI when retrieving reply and storing them to backend')
    // })

    // let response = await query
    // let { reply } = response
    // store.storeLog(msg.value,reply,lang)
    // console.log(`Storing Log:\n\tMsg: ${msg.value}\n\tLang: ${lang}\n\tReply: ${reply}`)
    // userMessages.value.push({
    //     // reply here is an object so wer need to return reply.reply
    //     "bot": reply,
    //     "user": msg.value
    // })

          
    userMessagesChatboxElements.value.push({
            source: "user",
            message: msg.value
        })


    let reply = store.getReply(msg.value).reply

    // alert(reply))
    // Example usage:
    // let replyChunks = chunkString(reply.reply, 350);
    let replyChunks = chunkWords(reply,1500)

        
    async function displayChunksWithDelay(replyChunks, delay = 400) {
        for (const [index, chunk] of replyChunks.entries()) {
            await new Promise(resolve => setTimeout(resolve, delay));

            // Append "...." if it's not the last chunk
            const messageSuffix = index < replyChunks.length - 1 ? " ..." : "";

            userMessagesChatboxElements.value.push({
                source: "bot",
                message: chunk + messageSuffix,
                showIcon: index === 0,
            });
        }

        

        // nextTick(() => {
        //         let chatboxContainer = document.querySelector('.chatbox-message-container');
        //         if (chatboxContainer) {
        //         let lastElement = chatboxContainer.lastElementChild;
        //         if (lastElement) {
        //             let topPos = lastElement.offsetTop + lastElement.offsetHeight; // Adjusted to include the height of the last element
        //             chatboxContainer.scrollTop = topPos;
        //         }
        //         }
        //     });
    }


    // Call the asynchronous function with 'await'
    await displayChunksWithDelay(replyChunks);

    // Start displaying messages sequentially with a delay of 400 milliseconds
    msg.value = ""
}



onMounted(() => {
    chatboxContainer = document.querySelector('.chatbox-message-container')
})

// side effect of update is to change the DOM next
// you can achieve this by calling nextTick to indicate 
// that you need to school down explicitly
// this can also be done with async and await...
// but this is so much clener
// watch(userMessages.value, function () {
//    // https://stackoverflow.com/questions/70276948/when-data-is-changed-within-the-watch-function-dom-does-not-update
//    setTimeout(function(){

//         nextTick(() => {
            
//             let chatboxContainer = document.querySelector('.chatbox-message-container')
//             let lastElement = chatboxContainer.lastElementChild
//             let topPos = lastElement.offsetTop;
//             chatboxContainer.scrollTop = topPos;
//         })
//    },400)
// })


// watch(userMessagesChatboxElements.value, function () {
//    // https://stackoverflow.com/questions/70276948/when-data-is-changed-within-the-watch-function-dom-does-not-update
//     nextTick(() => {
//         let chatboxContainer = document.querySelector('.chatbox-message-container')
//         alert( chatboxContainer)
//         let lastElement = chatboxContainer.lastElementChild
//         let topPos = lastElement.offsetTop;
//         chatboxContainer.scrollTop = topPos;
//     })
// })

watch(userMessagesChatboxElements.value, () => {
      nextTick(() => {
        let chatboxContainer = document.querySelector('.chatbox-message-container');
        if (chatboxContainer) {
          let lastElement = chatboxContainer.lastElementChild;
          if (lastElement) {
            let topPos = lastElement.offsetTop + lastElement.offsetHeight; // Adjusted to include the height of the last element
            chatboxContainer.scrollTop = topPos;
          }
        }
      });
    })

let resizeTextArea = (el) => {
    let textArea = document.getElementById("input-textarea")
    textArea.style.height = `42px`
    let newHeight = el.target.scrollHeight
    textArea.style.height = `${newHeight}px`
}

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getCurrentDateTime() {

    const currentDate = new Date();

    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    let hours = currentDate.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    const minutes = currentDate.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedDateTime = `${days[currentDate.getDay()]}, ${month} ${day}, ${year} ${hours}:${formattedMinutes} ${ampm}`;

    return formattedDateTime;
}

function chunkString(inputString, chunkSize = 200) {
    const chunks = [];

    while (inputString.length > 0) {
        let lastSpaceIndex = inputString.lastIndexOf(' ', chunkSize);

        // If no space is found within the chunk size, take the whole chunk
        if (lastSpaceIndex === -1) {
            lastSpaceIndex = chunkSize;
        }

        // Extract the chunk up to the last space
        let chunk = inputString.substring(0, lastSpaceIndex);

        chunks.push(chunk);

        // Remove the processed chunk from the input string
        inputString = inputString.substring(lastSpaceIndex).trim();
    }

    return chunks;
}


// working
function chunkWords(inputString, chunkSize = 200) {
    const words = inputString.split(' ');
    const wordChunks = [];
    let currentChunk = '';

    for (const word of words) {
        // Check if adding the current word to the current chunk exceeds the chunk size
        if ((currentChunk + ' ' + word).length > chunkSize) {
            // If so, start a new chunk with the current word
            wordChunks.push(currentChunk.trim());
            currentChunk = word;
        } else {
            // Otherwise, add the current word to the current chunk
            currentChunk += (currentChunk === '' ? '' : ' ') + word;
        }
    }

    // Add the last chunk (if any) to the result
    if (currentChunk.trim() !== '') {
        wordChunks.push(currentChunk.trim());
    }

    return wordChunks;
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
                        <strong>Chats</strong>
                    </div>
                </span>
            </span>
            <!-- <span class="chatbox-nav-actions">
                 <i class="icon-hawk"></i> 
                <i class="icofont-navigation-menu" @click.stop="showOverlay"></i>
            </span> -->
        </div>
        <div class="chatbox-message-container">

            
            <!-- use :message when value comes from variable
                else use message (without :) if static or direct -->
            <ChatboxChatbotMessage
                        message="Hi there! How can I help you?"
                        showIcon="true"
                        :time="getCurrentDateTime()"></ChatboxChatbotMessage>

            <TransitionGroup name="list" tag="ul">

                <li v-for="(item, index) in userMessagesChatboxElements" :key="index">

                    <ChatboxUserMessage 
                        v-if="item.source=='user'" 
                        :message="item.message"></ChatboxUserMessage>
                    <ChatboxChatbotMessage v-else-if="item.source=='bot'"
                        :message="item.message"
                        :showIcon="item.showIcon"
                        :time="getCurrentDateTime()"></ChatboxChatbotMessage>
                    
                </li>
            </TransitionGroup>
                
        </div>
        <div class="chatbox-actionbar">
            <textarea class="chatbox-textarea" id="input-textarea" @keyup="resizeTextArea" type="text" v-model="msg"
                placeholder="Type something here..."></textarea>
            <!-- <input 
                class="chatbox-action-text-input"
                type="text" 
                v-model="msg"
                placeholder="Type a message"
                >  -->
            <button class="chatbox-action-send" style="padding: 0 !important;" @click.stop=sendMessage()
                :disabled="msg == ''">
                <i class="icon-send" style="font-weight: 700;"></i>
                <!---->
                <!-- Send -->
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/variable";

// .chatbox{
//     height: 40vh !important;
// }


.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}


* {
    font-size: .9;
}

.chatbox-nav-actions {
    display: flex;
}



.icon-menu {
    display: block;
}

@media screen and (min-width: 425px) {

    .chatbox-nav-actions {
        display: none !important;
    }
}

@media screen and (min-width: 768px) {

    .chatbox-nav-actions {
        display: none !important;
    }
}

.chatbox {
    // min-width: 100%;
    // box-shadow: 0px 2px 4px rgba(235, 235, 235, 0.5);
    // background-color: white;
    box-shadow: none;
    border-left: variable.$border;
}

.chatbox-actionbar {
    border-top: variable.$border;


    .chatbox-action-send {
        // background-color: indianred !important;
        // padding: variable.$padding-left !important;
        // border-radius: 100% !important;
        // display: block;


    }

    .icon-send {
        margin: auto;
    }
}


.chatbox-nav {
    display: none !important;
}
</style>
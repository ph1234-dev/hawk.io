<script setup>

import { ref, watch, onMounted, nextTick } from 'vue'
import { useBackendAPI } from '@/stores/api';

let msg = ref('')
let userMessages = ref([])
let store = useBackendAPI()

let chatboxContainer = null

let sendMessage = async () => {

    let query = new Promise((resolve, reject) => {
        let response = store.getReply(msg.value)
        resolve(response)
    }).then((response) => {
        return response
    }).catch(e => {
        console.error('Something went wrong. Found Error in UI when retrieving reply and storing them to backend')
    })

    let response = await query
    let { reply, lang } = response
    // store.storeLog(msg.value,reply,lang)
    // console.log(`Storing Log:\n\tMsg: ${msg.value}\n\tLang: ${lang}\n\tReply: ${reply}`)
    userMessages.value.push({
        // reply here is an object so wer need to return reply.reply
        "bot": reply,
        "user": msg.value
    })


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
watch(userMessages.value, function () {
   // https://stackoverflow.com/questions/70276948/when-data-is-changed-within-the-watch-function-dom-does-not-update
    nextTick(() => {
        let lastElement = chatboxContainer.lastElementChild
        let topPos = lastElement.offsetTop;
        chatboxContainer.scrollTop = topPos;
    })
})

let showOverlay = () => {

    let el = document.querySelector(".nav-overlay")

    let style = el.style.display
    if (style == "flex") {
        el.style.display = "none"
    } else {
        el.style.display = "flex"
        el.style.borderBottom = "3px inset rgba(50, 49, 53,.7)"
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

}


let resizeTextArea = (el) => {

    // el.target.style.background = "green"
    // alert(textareaDOM)
    // alert(textareaDOM.style)
    // el.target.style.background = "green"
    // el.target.style.height = '0px';  // Force recalculation

    // alert('wtf')
    // console.log(el.target.style)
    let textArea = document.getElementById("input-textarea")
    textArea.style.height = `42px`
    let newHeight = el.target.scrollHeight
    textArea.style.height = `${newHeight}px`
    // console.log('Change >>')
    // console.log(`\tScroll Scroll Height:: ${newHeight}`)
    // console.log(`\tScroll Height:: ${el.target.offsetHeight}`)

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

// Example usage
// const formattedDateTime = getCurrentDateTime();


// type writter effect
function typeWriter(text, index) {
    let speed = 100
    let i = 0;
    const element = document.getElementById('typewriter-text');
    element.innerHTML = ''; // Clear existing text

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Call the typewriter function with your desired text and speed


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

            <span class="chatbot-message-chatbot-icon">
                <img class="chatbox-picture" src="@/assets/img/model.png">
                Arkhie <br> {{ getCurrentDateTime() }}
            </span>
            <p class="chatbox-message-chatbot">
                How are you?
            </p>


            <template v-for="(item, index) in userMessages" :key="index">

                <span class="chatbot-message-user-icon">
                    You
                </span>
                <p class="chatbox-message-user">
                    {{ item.user }}
                </p>

                <span class="chatbot-message-chatbot-icon">
                    <img class="chatbox-picture" src="@/assets/img/model.png">
                    Chatbot<br>{{ getCurrentDateTime() }}
                </span>
                <!-- <span class="chatbot-message-chatbot-icon">Chatbot</span> -->


                <p class="chatbox-message-chatbot">
                    {{ item.bot.reply }}
                </p>
            </template>

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


.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}


* {
    font-size: .9;
}

.chatbox-nav-actions {
    display: flex;
}

.chatbox-picture {
    width: 40px;
    height: auto;
    border-radius: variable.$border-radius;
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
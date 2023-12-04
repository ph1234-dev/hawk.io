import { nextTick } from 'vue';
import { store, msg, userMessagesChatboxElements } from './Chatbox.vue';

export let sendMessage = async () => {

let query = new Promise((resolve, reject) => {
let response = store.getReply(msg.value);
resolve(response);
}).then((response) => {
return response;
}).catch(e => {
console.error('Something went wrong. Found Error in UI when retrieving reply and storing them to backend');
});

let response = await query;
let { reply, lang } = response;
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
});

nextTick(function () {
alert('done');
});
// setTimeout(function(){
// },400)
// setTimeout(function(){
//     nextTick(() => {
//         let lastElement = chatboxContainer.lastElementChild
//         let topPos = lastElement.offsetTop;
//         chatboxContainer.scrollTop = topPos;
//     })
// },400)
// create html element
msg.value = "";
};

<script setup>

import { ref, watch, onMounted, nextTick } from 'vue'

const props = defineProps(['message', 'time','showIcon'])

const typedMessage = ref('');

  onMounted(() => {
//   if (typewriterElement.value) {
    typeWriter(props.message, 8);
//   }
});

function typeWriter(text, speed) {
  let chatboxContainer = document.querySelector('.chatbox-message-container');
  let lastElement = chatboxContainer.lastElementChild;

  let i = 0;
  function type() {
    if (i < text.length) {
      typedMessage.value += text.charAt(i);
      i++;
      setTimeout(type, speed);

      // nextTick(() => {
      //   if (chatboxContainer) {
      //     if (lastElement) {
      //       let topPos = lastElement.offsetTop + lastElement.offsetHeight; // Adjusted to include the height of the last element
      //       chatboxContainer.scrollTop = topPos;
      //     }
      //   }
      // });
    }
  }

  type();
}


</script>

<template>
    <span v-show="props.showIcon" class="chatbot-message-chatbot-icon">
        <img class="chatbox-picture" src="@/assets/img/model.png">
        Archie <br>{{ props.time }}
    </span>
    <p class="chatbox-message-chatbot">
        <!-- {{ typedMessage }} -->
        {{ props.message }}
    </p>
</template>


<style lang="scss" scoped>
@use "sass:math";
@use "@/assets/scss/variable";

.chatbox-picture {
    width: 40px;
    height: auto;
    border-radius: variable.$border-radius;
}

.chatbox-message-chatbot{
  margin-bottom: math.div(variable.$padding-top,1) !important;
}
</style>


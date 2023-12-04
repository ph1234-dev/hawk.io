<script setup>
    const props = defineProps(['message','time'])
</script>

<template>
    <span class="chatbot-message-user-icon">
        You
        </span>
        <p class="chatbox-message-user">
        {{ props.message }}
    </p>
</template>

<style lang="scss" scoped>
.chatbox-message-user{
    width: fit-content;
}
</style>


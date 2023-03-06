<template>
    <div class="container container-centered">
        <span class="text-bigger">Account Registered</span>
        <p>Thank you for registering. You may now proceed using the application.</p>
        <button class="btn-primary" @click.stop="goToChat">Proceed</button>
    </div>
</template>

<style lang="scss" scoped>
p{
    max-width: 45ch;
    text-align: center;
}

.btn-primary{
    margin-top: 5vh;    
}
</style>
<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()

let goToChat = ()=>{
    router.push({
        name: 'home'
    })
}
</script>
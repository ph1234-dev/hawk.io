<script setup>
import { useRouter } from 'vue-router';

let router = useRouter()
let removeOverlay = ()=>{
    let el = document.querySelector(".nav-overlay")
    el.style.display = "none"
}

let login = () => {
    router.push({ name: 'signin' })
    removeOverlay()
}

let goToChat = () => {
    router.push({ name: 'chat' })
    removeOverlay()
}

let goToRegister= () => {
    router.push({ name: 'register' })
    removeOverlay()
}

</script>

<template>
    <div class="nav-overlay">
        <span class="icon-hawk icon-bigger"></span>
        <p class="title-bigger">hawk.io</p>
        <p class="title">
            Health Awareness Knowledgebase
        </p>
        <button class="btn-primary" @click.stop="goToChat">Chat Now</button>
        &nbsp;
        <button class="btn-accent call-to-action" @click.stop="login">Sign In</button>
        <b>or</b>
        <p>Click <a @click.stop="goToRegister" >here</a> to register</p>
    </div>
</template>

<style lang="scss" scoped>
.nav-overlay {
    /* background-color: rgb(241, 240, 240);
        background-color: white; */
}

.title {
    margin: 0rem 0 1rem 0;
    font-size: 1rem;
    font-weight: 500;
    width: 15ch;
    text-align: center;
}

.icon-bigger {
    font-size: 7rem;
}

.title-bigger {
    font-size: 2rem;
    font-weight: 800;
}
</style>
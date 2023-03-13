<script setup>
import {onMounted} from 'vue'
import { useRouter } from 'vue-router';
import { useBackendAPI } from '@/stores/api';
import LoginForm from './LoginForm.vue';

let backendAPI = useBackendAPI()
let user = backendAPI.user
let router = useRouter()
let removeOverlay = () => {
    let el = document.querySelector(".nav-overlay")
    el.style.display = "none"
}

</script>

<template>
    <div class="nav-overlay">
        <LoginForm v-if="user.authenticated == false"></LoginForm>
        <div class="proceed-block"  v-else>
            <button class="btn-accent" @click.stop="removeOverlay">Proceed</button>
            <p class="text-small">
                Click proceed to use the application 
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.proceed-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: .8em;
    
    p {
        max-width: 35ch;
    }
}

.nav-overlay {
    /* background-color: rgb(241, 240, 240);
        background-color: white; */
    width: 100%;
    z-index: 9999;
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
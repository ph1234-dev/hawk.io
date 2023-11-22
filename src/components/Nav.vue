<script setup>
import {watch,ref} from 'vue'
import { useBackendAPI } from '../stores/api';
import { useRouter } from 'vue-router';

let store = useBackendAPI()
let user = store.user
let router = useRouter()

let logout = ()=>{
    console.log("Logout clicked")
    store.logoutUserAccount()
}

</script>

<template >
    <nav class="nav">
        <span class="nav-content">
            <router-link :to="{name: 'home'}"><span class="icofont-cube"></span> Activlab.pro</router-link>
            <template v-if="user.authenticated==false">
                <span class="nav-link-push-left">
                    <router-link :to="{name: 'login'}" ><span class="icofont-sign-in"></span> Login</router-link>
                    <router-link :to="{name: 'register'}">Register</router-link>
                </span>
            </template>
            <template v-else>
                <span class="nav-link-push-left">
                    <a ><span class="icofont-safety"></span> {{ user.name }}</a>
                    <a @click.stop="logout()" ><span class="icofont-sign-out"></span>Logout</a>
                </span>
            </template> 
            
        </span>
    </nav>
</template>

<style lang="scss" scoped>
.nav-content{
    // max-width: 100%;
}

.nav{
    display: none;
}

@media screen and (min-width: 768px) {
    .nav{
        display: flex;
    }
}
</style>
<script setup>

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
            <router-link :to="{name: 'home'}">Hawk.io</router-link>
            <template v-if="user.id==``">
                <span class="nav-link-push-left">
                    <router-link :to="{name: 'login'}" >Login</router-link>
                    <router-link :to="{name: 'register'}">Register</router-link>
                </span>
            </template>
            <template v-else>
                <span class="nav-link-push-left">
                    <span class="nav-link-push-left">{{ user.name }}</span>
                    <a @click.stop="logout()" class="nav-link-push-left">Logout</a>
                </span>
            </template>
            
        </span>
    </nav>
</template>

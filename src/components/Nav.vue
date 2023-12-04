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
            <div style="display: flex; align-items: center;">
                <!-- <span class="icon-double_arrow"></span> -->
                <img style="width: 1rem; height: auto;" class="area-information-body-img" src="@/assets/svg/hawk.svg" >
                <!-- &nbsp;<span style="font-weight: 500; color: rgb(95, 95, 95) !important">Health Awareness Knowledgebase Chatbot</span> -->

                &nbsp;<span style="font-weight: 700;color: rgb(95, 95, 95) !important;">Project Hawk</span>
            </div>
                 <!-- <template v-if="user.authenticated==false">
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
            </template>  -->
            
            <span class="nav-link-push-left">
                <!-- <a ><span class="icofont-safety"></span>Health Awareness Knowledgebase</a> -->
                    <!-- <a @click.stop="logout()" ><span class="icofont-sign-out"></span>Logout</a> -->
            </span>
        </span>
    </nav>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/variable";
.nav-content{
    // max-width: 100%;
}

.nav{
    display: none;
}

@media screen and (min-width: 768px) {
    .nav{
        display: flex;
        background-color: variable.$bg-primary;
        padding: 0;
        box-shadow: none;
        background-color: #e3e3e3;
        *{
            color: variable.$bg-gray-darker !important;
        }
    }
}
</style>
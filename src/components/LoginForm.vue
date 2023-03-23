<script setup>

import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue'
import { useFormValidator } from '@/util/validator'
import { useBackendAPI } from '@/stores/api'

let { formErrors, validateEmptyField } = useFormValidator()
let store = useBackendAPI()
let router = useRouter()
let formInitialValue = {
    username: '',
    password: '',
}

let form = reactive(formInitialValue)
let showDoesNotExistAccount = ref()

let submit = async () => {

    let validate = new Promise((resolve, reject) => {
        console.log(`Trying to validate username[${form.username}] | password[${form.password}]`)
        validateEmptyField('username', form.username)
        validateEmptyField('password', form.password)
        resolve(Object.keys(formErrors).length > 0)
    }).then(async function (response) {
        if (response) {
            console.log(`Form errors found`)
        } else {
            let stat = await store.loginUserAccount(form.username, form.password)
            if ( stat ){
                console.log("Should be logging in")
                router.push({
                    name: 'home'
                })
            }else{
                showDoesNotExistAccount.value = "Account does not exist"
            }
            console.log('Status login: ', stat)
        }
    })

    await validate


    // form = reactive(formInitialValue)
}

</script>

<template>


    <form class="form" @submit.prevent="submit()">

        <div class="form-header">
            <strong class="">Account Details  <span class="icofont-safety"></span></strong>
            <p class="text-small ">Use the account you registered.</p>
        </div>
        
        <span class="" v-if="showDoesNotExistAccount"> Account Does Not Exist</span>

        <!-- <label>Username</label> -->
        <input v-model="form.username" type="text" placeholder="Username">
        <span v-if="formErrors.username" class="error ">{{ formErrors.username }}</span>

        <!-- <label>Password</label> -->
        <input v-model="form.password" type="password" placeholder="Password">
        <span v-if="formErrors.password" class="error">{{ formErrors.password }}</span>
        <input type="submit">

        <div class="text-small login-options">
            <p class="dont-have-account">
                Dont have Account yet? Click
                <router-link class="text-bold" :to="{name: 'register'}">here</router-link> 
                to register
            </p>
            <strong>or</strong>
            <p>Click <a><strong>here</strong></a> to use the application without logging in</p>
        </div>
    </form>
    
</template>

<style lang="scss" scoped>

    $scoped-opacity: .77;
    $scoped-color-white:  rgba(255,255,255,$scoped-opacity) !important;
    $scoped-blue: #2a52be;
    $scoped-padding: 7rem;
    $scoped-shadow: 0px 2px 7px rgba($scoped-blue, 0.15);

    p{
        // width:35ch;
    }
    .dont-have-account{
        margin-top: 2rem;
        // text-align: center;
        // align-self: center;
    }
    .title{
        margin-bottom: 40px;
    }

    form{
        border: none;
        box-shadow:  $scoped-shadow;
        align-items: center;
       
        .error{
            align-self: flex-start;
        }
    }

    .form-header{
        line-height: 100%;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .login-options{
        // background-color:#2a52be;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
        >*{
            width: 35ch;
        }
    }
</style>
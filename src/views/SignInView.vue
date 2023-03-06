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

        <span class="text text-big text-bold">Account Details</span>
        <p class="text-small">Login using the account you registered</p>
        
        <span class="" v-if="showDoesNotExistAccount"> Account Does Not Exist</span>

        <label>Username</label>
        <input v-model="form.username" type="text">
        <span v-if="formErrors.username" class="error">{{ formErrors.username }}</span>

        <label>Password</label>
        <input v-model="form.password" type="password">
        <span v-if="formErrors.password" class="error">{{ formErrors.password }}</span>

        <input type="submit">
        <p class="dont-have-account text-small">Dont have Account yet? Click <a>here</a> to register</p>
    </form>
</template>

<style scoped>
    .dont-have-account{
        margin-top: 2rem;
    }
    .title{
        margin-bottom: 40px;
    }
    form{
        border: none;
    }
</style>
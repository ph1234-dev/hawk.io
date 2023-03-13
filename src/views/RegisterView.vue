<script setup>
    import { useRouter } from 'vue-router';
    import {ref,reactive} from 'vue'
    import { useFormValidator } from '@/util/validator'
    import { useBackendAPI }  from '@/stores/api'

    let {formErrors,validateEmptyField} = useFormValidator()
    let store = useBackendAPI()
    
    let formInitialValue = {
        username: '',
        password: '',
        name: ''
    }

    let router = useRouter()
    let form = reactive(formInitialValue)
    let submit = async() => {
     
        let validate = new Promise((resolve,reject)=>{
            console.log(`Trying to validate username[${form.username}] | password[${form.password}]`)
            validateEmptyField('username',form.username)
            validateEmptyField('password',form.password)
            validateEmptyField('name',form.name)
            resolve(Object.keys(formErrors).length > 0)
        }).then(function(response){
            if (response){
            // do nothing
                console.log(`Form errors found: `)
            }else{
                // console.log(`Form Errors? ${Object.keys(formErrors)}`)
                // submit
                let status = store.registerUser(form.username,form.password,form.name)
                return status
            }
    })


    // if true users can register 
    // else there was an error 
    let allowed = await validate
    console.log(`Allowed status from interface : ${allowed}`)
    if (allowed) {
        console.log("Successful Registration")
        router.push({
            name: 'successful_register'
        })
        showAccountError.value = false
    } else {
        // alert('user already exist')
        showAccountError.value = true
        form = reactive(formInitialValue)
    }
}

let showAccountError = ref(false)

</script>

<template>
    <form class="form" @submit.prevent="submit()">
        <strong>New Account</strong>

        <p class="text-small">
            <template v-if="showAccountError" class="error">
                Account with username 
                <strong><em>{{form.username}}</em></strong>
                already exist. Please choose a different one
            </template>
            <template v-else>
                Complete the fields provided to register
            </template>
        </p>
        
        &nbsp;
        <label>Tester name</label>
        <input v-model="form.name" type="text">
        <span v-if="formErrors.name"  class="error">{{ formErrors.name }}</span>

        <label>Username</label>
        <input v-model="form.username" type="text">
        <span v-if="formErrors.username"  class="error">{{ formErrors.username }}</span>

        <label>Password</label>
        <input v-model="form.password" type="password">
        <span v-if="formErrors.password"  class="error">{{ formErrors.password }}</span>

        <input type="submit" >
    </form>
</template>

<style scoped>
    .title{
        margin-bottom: 40px;
    }
    form{
        border: none;
        box-shadow: 0px 2px 7px rgba(228, 228, 228, 0.77);
    }
</style>
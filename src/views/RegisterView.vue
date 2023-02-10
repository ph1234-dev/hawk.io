<script setup>
    import { useRouter } from 'vue-router';
    import {ref,reactive} from 'vue'
    import { useFormValidator } from '@/util/validator'
    import { useBackendAPI }  from '@/stores/api'

    let {formErrors,validateEmptyField} = useFormValidator()
    let {registerUser} = useBackendAPI()
    
    let formInitialValue = {
        username: '',
        password: '',
        name: ''
    }

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
                console.log(`Form Errors? ${Object.keys(formErrors)}`)
                // submit
                registerUser(form.username,form.password,name)
            }
            })

        await validate

        

    }


</script>

<template>
    <form class="form" @submit.prevent="submit()">
        <span class="text text-big text-bold">New Account</span>
        <p class="text-small">Complete the fields provided to register</p>
        
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
    }
</style>
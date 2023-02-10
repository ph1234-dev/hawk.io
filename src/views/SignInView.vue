<script setup>

</script>

<template>
    <div class="wrapper">
        <form>
        <span>
            <i class="icon-hawk"></i>
            Back To Home
        </span>
        <span class="title">Sign In</span>
        <label>Username</label>
        <input type="text">
        <label>Password</label>
        <input type="password">
        <input type="submit" value="Sign In">
    </form>
    </div>
</template>

<style scoped>
    .title{
        margin-bottom: 1em;
    }

    
    form{
        border: none;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    

    @media screen and (min-width: 321px) {
        
        form{
            z-index: unset;
            position: relative;
            width: 100%;
            height: fit-content;
            background-color: transparent;
            justify-content: center;            
        }

    }

</style>

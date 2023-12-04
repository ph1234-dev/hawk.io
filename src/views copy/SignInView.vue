<script setup>

import LoginForm from '@/components/LoginForm.vue';

</script>

<template>
    <section class="container container-centered">
        <LoginForm></LoginForm>
    </section>    
</template>

<style lang="scss">

    $scoped-opacity: .77;
    $scoped-color-white:  rgba(255,255,255,$scoped-opacity) !important;
    $scoped-blue: #2a52be;
    $scoped-padding: 7rem;
    $scoped-shadow: 0px 2px 7px rgba($scoped-blue, 0.15);

</style>
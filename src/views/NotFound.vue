<template>
    <section class="error-notification container container-centered">
        <i id="broken-icon" class="icofont-broken"></i>
        <span class="text-biggest"><strong>404</strong></span>
        <span ><strong>Page not found</strong></span>
        <p class="message">
            Sorry, but the page you are looking does not exist.</p>
        <router-link :to="{ name: 'home' }" class="action btn btn-primary">
            <span class="icofont-cube"></span>Go Back Home
        </router-link>
    </section>
</template>

<style lang="scss" scoped>
$scoped-opacity: .77;
$scoped-color-white: rgba(255, 255, 255, $scoped-opacity) !important;
$scoped-blue: #2a52be;
$scoped-padding: 7rem;

.error-notification {

    * {
        color: $scoped-color-white;
    }
}

#broken-icon {
    margin: 1rem 0;
    font-size: 15vh;
}


* {
    text-align: center;
}

.message {
    width: 45ch;
}
    

.action{
    margin: 1rem 0;
}
</style>
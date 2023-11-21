<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import NavOverlay from '@/components/NavOverlay.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router'

// these pertaining files makes the app installable.. (aside form being pwa you need to make it instlalable also)
// you can refer to chatgpt 

    const beforeInstallPrompt = (event) => {
      // Prevent the default behavior to prevent the browser's install prompt
      event.preventDefault();
      
      // Store the event for later use
      installPromptEvent.value = event;
    };


    const installApp = () => {
      if (installPromptEvent.value) {
        // Trigger the installation by calling prompt() on the stored event
        installPromptEvent.value.prompt();
        
        // Wait for the user to respond to the prompt
        installPromptEvent.value.userChoice.then(choiceResult => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the installation');
          } else {
            console.log('User dismissed the installation');
          }
          
          // Clear the install prompt event after user choice
          installPromptEvent.value = null;
        });
      }
    };

    onMounted(() => {
      // Add event listener when the component is mounted
      window.addEventListener('beforeinstallprompt', beforeInstallPrompt);

    });

    onBeforeUnmount(() => {
      // Remove event listener when the component is unmounted
      window.removeEventListener('beforeinstallprompt', beforeInstallPrompt);
    });

</script>

<template>
  <NavOverlay></NavOverlay>
  <div class="template">
    <header class="template-header" >
      <Nav />
    </header>
    <main class="template-body">
      <RouterView></RouterView>
    </main>
    <footer class="template-footer" >
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss" >
@use "assets/scss/app.scss";
@use "assets/scss/variable";

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

// @import url("@/assets/icons/style.css");
@import url("@/assets/icofont/icofont.css");

$scoped-opacity: .77;
$scoped-color-white:  rgba(255,255,255,$scoped-opacity) !important;
$scoped-blue: #2a52be;
$scoped-padding: 7rem;

* {
  font-family: 'Poppins', sans-serif !important;
}


.template{
  overflow: hidden;
}


.template-header{

  *{
    color: $scoped-color-white;
  }
}


.template-footer,
.template-header{
  z-index: 3;
  background-color: transparent !important;

  *{
    background-color: transparent;
  }
}

.template-body{
  overflow-y:unset;
  z-index: 2;
  
  &::before{
    content: '';
    z-index: -1;
    // background-color: rgb(236, 50, 87);

    // https://cssgradient.io/shades-of-blue/
    // cerulean blue
    background-color: $scoped-blue;
    // background-color: cornflowerblue;
    display: block;
    width: 100%;
    height: 100vh;
    // scale: (2.95);
    // transform: rotate(-3deg);  
    // in order for absoluate to work you need to set the parent
    // container and the positions top/lef/right/bottom
    // https://www.youtube.com/watch?v=3PDQDRJq5Ls
    position: absolute;
    left: 0;
    top: 0;
  }
}

@media screen and (min-width: 768px) {
    .template-body{
      z-index: 1;
      &::before{
        content: '';
        z-index: -1;
      }
    }

    .template-footer,
    .template-header{
      z-index: 2;
    } 

}


</style>

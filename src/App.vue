<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import NavOverlay from '@/components/NavOverlay.vue'
import AppBodySection2 from '@/components/AppBodySection2.vue';
import AppBodySection3 from './components/AppBodySection3.vue';

let scrollDown = ()=>{
  let el = document.querySelector("#template-body-section-2")
  if ( el ){
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <NavOverlay></NavOverlay>
  <div class="template">
    <header class="template-header">
      <Nav />
    </header>
    <main class="template-body">

      <section id="template-body-content-1" class="container container-split-2" >
        <div id="left-area">
          <div id="project-title-container">
            <strong id="catch-phrase" class="text-biggest">Hawk </strong>
            <i class="hawk-outline"></i>
          </div>
          
          <div id="project-title-container" class="text-big">
            <strong>A selfcare Assistant</strong>
          </div>
          
          <em class="text-small">Health Awareness Knowledgebase , or Hawk, is a conversational agent for diarrhea and influenza</em>

          <div id="call-to-action">
            <button @click="scrollDown()" class="btn btn-primary" style="margin-top: 1rem"><i class="icofont-arrow-down"></i>Learn more</button>  
          </div>
        </div>
        <RouterView ></RouterView>
      </section>

      <AppBodySection2></AppBodySection2>

      <AppBodySection3></AppBodySection3>



    </main>
    <footer class="template-footer">
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

#left-area{
  display: none;

  #call-to-action{
    margin-top: 5rem;
  }
}

em,
p{
  max-width: 40ch;
}

#project-title-container{
  display: flex !important;
  align-items: center;
  gap: .5rem;
}

.hawk-outline{
  background: url("@/assets/svg/logo outline.svg") no-repeat;
  // background-color: indianred;
  // background-repeat: no-repeat;
  // bak
  // width: 100px;
  // height: 100px; 
  width: calc(1.15rem + 1.5vw);
  height:  calc(1.15rem + 1.5vw);
  display: block;
  opacity: $scoped-opacity;
}

#template-body-content-1{
  z-index: 999;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}




@media screen and (min-width: 768px){
  #left-area{
    display: flex;
    flex-direction: column;
    *{
      color: $scoped-color-white;
    }
    min-width: 50%;
      
    >:nth-child(1){
      // color: green !important;
      margin-bottom: 3rem;
    }

    #catch-phrase{
      line-height: 110%;
    }
  }

  #template-body-content-1{  
    flex-direction: row !important;
    // align-items: unset;
    gap: unset;
    align-content: flex-start;
  }
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
  z-index: 2;
  background-color: transparent !important;

  *{
    background-color: transparent;
  }
}

.template-body{
  overflow-y:unset;
  &::after{
    content: '';
    z-index: 1;
    // background-color: rgb(236, 50, 87);

    // https://cssgradient.io/shades-of-blue/
    // cerulean blue
    background-color: $scoped-blue;
    // background-color: cornflowerblue;
    display: block;
    width: 100%;
    height: 40vh;
    scale: (2.95);
    // transform: rotate(-3deg);  
    // in order for absoluate to work you need to set the parent
    // container and the positions top/lef/right/bottom
    // https://www.youtube.com/watch?v=3PDQDRJq5Ls
    position: absolute;
    left: 0;
    top: 0;
  }
}

</style>

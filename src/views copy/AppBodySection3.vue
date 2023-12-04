<template>
      <section class="template-body-content">
        <span class="text-big text-bold title">Language Support</span>
        <span class="details">The application supports three languages</span>
        <span id="content" class="container container-row container-centered" style="align-items: flex-start">
          <div class="block">
            <i class="icofont-pixels text-biggest"></i>
            <span class="text-bold">English</span>
            <p class="text-small" >
              The conversational agent provides selfcare information using English language.
            </p>
          </div>
          <div class="block">            
            <i class="icofont-pixels text-biggest"></i>
            <span class="text-bold">Filipino</span>
            <p class="text-small">
              Ang conversational agent na ito ay nagbibigay ng karunungan ukol sa sariling pangangalaga
              sa wikang Filipino. 
            </p>
          </div>
          <div class="block">            
            <i class="icofont-pixels text-biggest"></i>
            <h4 class="">Maguindanaon</h4>
            <p class="text-small">
              Su nya ba a converational agent na pagenggay sa ula ula pantag ka katyakap nengka sa 
              ginawa nengka sa basa na Maguindanaon.
            </p>
          </div>
        </span>
      </section>
</template>

<style lang="scss" scoped>
$scoped-opacity: .77;
$scoped-color-white:  rgba(255,255,255,$scoped-opacity) !important;
$scoped-blue: #2a52be;
$scoped-padding: 7rem;
.template-body-content{
  // background-color: $scoped-blue;
  padding: $scoped-padding 0 $scoped-padding 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  text-align: center;
  background-color: $scoped-blue;
  .title{
    margin-bottom: 2rem;
  }

  .details{
    margin: 1rem 0 1rem 0;
    max-width: 45ch;
  }


  #content{
    margin-top: 2rem;
  }

  *{
    color: $scoped-color-white;
  }

  
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
    height: auto;
    scale: (2.95);
    transform: rotate(-3deg);  
    // in order for absoluate to work you need to set the parent
    // container and the positions top/lef/right/bottom
    // https://www.youtube.com/watch?v=3PDQDRJq5Ls
    position: absolute;
    left: 0;
    top: 0;
  }
}

</style>
<script setup>
import Chatbox from '@/components/Chatbox.vue'
let scrollDown = () => {
    let el = document.querySelector("#template-body-section-2")
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}
</script>

<template>
    <section id="template-body-content-1" class="container container-split-2 util-paddingless">
        <div class="area-information" >

            
            <!-- <img style="width: 150px; height: auto;" src="@/assets/svg/hawk-colored.png"/> -->
            
            <div class="icon"> 
                <i class="icofont-bucket"></i>
            </div> 
            <span class="catch-phrase text-biggest"><b>Hawk</b></span>


            <p class="details">A Health Awareness Knowledgebase (Hawk) conversational agent for diarrhea and influenza </p>
            <!-- <p class="details" style="">
                Health Awareness Knowledgebase , or Hawk, is a conversational agent for diarrhea and
                influenza
            </p> -->

            <!-- <div class="call-to-action">
                <button @click="scrollDown()" class="btn btn-primary" style="margin-top: 1rem"><i
                        class="icofont-arrow-down"></i>Learn more</button>
            </div> -->

        </div>

        <Chatbox></Chatbox>
    </section>
</template>

<style lang="scss" scoped>

@use 'sass:math';
@use "@/assets/scss/variable";


$scoped-opacity: .77;
$scoped-color-white: rgba(255, 255, 255, $scoped-opacity) !important;
$scoped-blue: #2a52be;
$scoped-padding: 7rem;

em,
p {
    max-width: 40ch;
}


.area-information {
    display: flex !important;
    flex-direction: column;
    padding: variable.$padding-top * 4;
    padding-top: variable.$padding-top*10;
    // padding-bottom: variable.$padding-top*4;

    // background-color: #2a52be;
    align-self: flex-start;
   

    .catch-phrase {
        max-width: 35ch;
    }

    .details {
        display: none;
        padding: 0;
        font-size: .9rem !important;
    }

    .call-to-action {
        margin-top: 1rem;
        margin-bottom: 3rem;
    }
}

.hawk-outline {
    background: url("@/assets/svg/logo outline.svg") no-repeat;
    // background-color: indianred;
    // background-repeat: no-repeat;
    // bak
    // width: 100px;
    // height: 100px; 
    width: calc(1.15rem + 1.5vw);
    height: calc(1.15rem + 1.5vw);
    display: block;
    opacity: $scoped-opacity;
}

#template-body-content-1 {
    z-index: 2;
    // position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto !important;
    
    // background-color: transparent;
    
    box-shadow: 0px 2px 7px rgba(215, 215, 215, 0.6);
}



@media screen and (min-width: 768px) {
    .area-information {
        display: flex;
        flex-direction: column;
        align-items: center;


        width: 30%;


    }

    #template-body-content-1 {
        flex-direction: row !important;
        gap: unset;
        align-content: flex-start;
    }
}

@media screen and (min-width: 1024px) {
    .area-information {
        align-items: flex-start;

        .details {
            display: block;
        }

        .title-container {
            margin-bottom: 3rem;
        }

        .call-to-action {
            margin-top: 3rem;
        }
    }
}
</style>
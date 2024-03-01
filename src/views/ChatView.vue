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

            <div class="area-information-body">

                <img style="border-radius: 100%; width: 100px !important;" class="area-information-body-img" src="@/assets/img/model.png" >
                <!-- <img class="area-information-body-img" src="@/assets/svg/undraw_progressive_app.svg" > -->
                <!-- <img class="area-information-body-img" src="@/assets/svg/hawk.svg" > -->
                <div class="area-information-body-title" >

                </div>

                <p class="details">
                    <!-- <small> -->
                        <strong>A self-care converstional agent for
                            Diarrhea and Influenza.</strong>
                </p>
                
            </div>
            <div class="area-information-footer">
                <div 
                    style="
                        display: flex; 
                        align-items: center;
                        /* background: orange; */
                        height: 50px;
                        gap: 10px;
                        ">
                    <img style="width: 30px; order: 1" src="@/assets/svg/hawk.svg" >
                    <span style="max-width: 35ch; line-height: .9rem; font-size: .7rem; order: 2">
                        <p><b>An Edge-based Aritificial Intelligence</b><br>Built from Hawk Framework</p>
                    </span> 
                </div>                
            </div>
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
    padding: 
        variable.$padding-top*5
        variable.$padding-left*3
        variable.$padding-top*3
        variable.$padding-left*3;
    // padding: variable.$padding-top * 4;
    // padding-top: variable.$padding-top*10;
    // padding-bottom: variable.$padding-top*4;
    // position: re;
    min-height: 80vh;
    // background-color: variable.$bg-primary;
    align-self: flex-start;
   
    // background-color: variable.$bg-primary;
    // background-color: indianred;

    
    .details {
        display: none;
        padding: 0;
        // font-size: .9rem !important;
        width: 30ch;
    }

    .area-information-body{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: variable.$gap-vertical;
        color: white !important;
        text-align: center;
        // justify-content: center;
        align-items: center;
    
        .area-information-body-title{
            display: flex;
            flex-direction: column; 
            margin: variable.$margin-top 0 variable.$margin-top 0;   
        }
        .area-information-body-img{
            min-width: 200px !important;
            min-height: 200px;
            height: auto !important;
            margin-bottom: variable.$margin-top;
        }
    }

    .area-information-footer{
        width: 100%;
    }
}

#template-body-content-1 {
    z-index: 2;
    // position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto !important;
    
    background-color: white;
    // background-color: rgb(255, 186, 57);
    box-shadow: 0px 2px 7px rgba(215, 215, 215, 0.6);
    border-radius: variable.$border-radius;
    // border-radius: 15px;
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
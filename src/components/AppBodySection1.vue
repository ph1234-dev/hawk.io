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
    <section id="template-body-content-1" class="container container-split-2">
        <div class="area-information" >

            <div class="title-container">
                <strong class="catch-phrase text-biggest">Hawk</strong>
                <!-- <strong class="catch-phrase text-bigger">Hawk</strong> -->
                <!-- <i class="hawk-outline"></i> -->
            </div>

            <div class="subtitle-container text-big">
            <!-- <div class="subtitle-container text"> -->
                <strong>A selfcare Assistant</strong>
            </div>

            <p class="details text-small">
                Health Awareness Knowledgebase , or Hawk, is a conversational agent for diarrhea and
                influenza
            </p>

            <div class="call-to-action">
                <button @click="scrollDown()" class="btn btn-primary" style="margin-top: 1rem"><i
                        class="icofont-arrow-down"></i>Learn more</button>
            </div>

        </div>

        <Chatbox></Chatbox>
    </section>
</template>

<style lang="scss" scoped>
$scoped-opacity: .77;
$scoped-color-white: rgba(255, 255, 255, $scoped-opacity) !important;
$scoped-blue: #2a52be;
$scoped-padding: 7rem;

em,
p {
    max-width: 40ch;
}


.area-information {
    display: none;


    .title-container {
        display: flex !important;
        align-items: center;
        gap: .5rem;
    }

    .subtitle-container {
        font-size: 1.25rem;
    }

    .catch-phrase {
        max-width: 35ch;
    }

    .details {
        display: none;
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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
}



@media screen and (min-width: 768px) {
    .area-information {
        display: flex;
        flex-direction: column;
        align-items: center;

        * {
            color: $scoped-color-white;
        }

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
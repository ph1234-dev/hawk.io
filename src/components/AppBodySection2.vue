<template>
    <section id="template-body-section-2" class="template-body-content">
        <span class="text-big text-bold title">Target Scope</span>
        <span class="details">At the moment, the application knows limited and targeted conversations.</span>
        <span id="content" class="container container-row container-centered">
            <div class="block">
                <i class="icofont-first-aid text-biggest"></i>
                <span class="text-bold">Diarrhea</span>
                <p class="text-small">
                    The chatbot can provide you information that may be useful for taking care of
                    your iderlying condition.
                </p>
            </div>
            <div class="block">
                <i class="icofont-first-aid text-biggest"></i>
                <span class="text-bold">Influenza</span>
                <p class="text-small">
                    The chatbot can provide you information that may be useful for taking care of
                    your iderlying condition.
                </p>
            </div>
        </span>
    </section>
</template>

<style lang="scss" scoped>

$scoped-padding: 7rem;
.template-body-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: $scoped-padding 0 $scoped-padding 0;

  .title{
    margin-bottom: 2rem;
  }

  .details{
    max-width: 45ch;
  }

  #content{
    margin-top: 2rem;
  }
}
</style>
<template>
      <div class="main_container">
          <HeaderLayout />
        </div>

  <section class="createguide">
      <div class="main_container">
          <Retour textBtn="Retour" />
          <div class="createguide-title">
              <h2>Créer votre <span>guide de voyage</span></h2>
              <h3>Personnaliser votre experience :</h3>
          </div>
        <FormBackCreateGuide />
      </div>
  </section>
</template>

<script>
import HeaderLayout from '@/components/HeaderLayout.vue'
import Retour from '@/components/CTA/Retour.vue'
import FormBackCreateGuide from '@/components/formulaire/FormBackCreateGuide.vue'


export default {
    name: 'CreateGuide',
    components: {
        HeaderLayout,
        Retour,
        FormBackCreateGuide

    }

}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/createguide.css');


</style>
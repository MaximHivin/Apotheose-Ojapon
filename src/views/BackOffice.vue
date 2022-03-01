<template>
  <div>
      <HeaderLayout />
      
      <CreationGuide LinkContent="Créer un guide voyage" />
      <CreationGuide LinkContent="Créer un guide voyage" />
      <CreationGuide LinkContent="Créer un guide voyage" />
      <CreationGuide LinkContent="Créer un guide voyage" />

      <FooterLayout />
      <FooterLayoutMobile />
  </div>
</template>

<script>

import HeaderLayout from '@/components/HeaderLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'
import FooterLayoutMobile from '@/components/FooterLayoutMobile.vue'

import CreationGuide from '@/components/CTA/CreationGuide.vue'

export default {
    name: 'BackOffice',
    components: {
        HeaderLayout,
        CreationGuide,
        FooterLayout,
        FooterLayoutMobile

    }

}

</script>


<style>



</style>
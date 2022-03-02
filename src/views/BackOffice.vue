<template>
  <div>

      <h1>Bonjour <span>User</span></h1>
      <p>Vous souhaitez :</p>
      
      <CreationGuide LinkContent="Créer un guide voyage" />
      <CreationGuide LinkContent="Créer un guide voyage" />
      <CreationGuide LinkContent="Créer un guide voyage" />
      <CreationGuide LinkContent="Créer un guide voyage" />

      <!-- <FooterLayoutMobile /> -->
  </div>
</template>

<script>

// import HeaderLayout from '@/components/HeaderLayout.vue'
// import FooterLayout from '@/components/FooterLayout.vue'
// import FooterLayoutMobile from '@/components/FooterLayoutMobile.vue'

import CreationGuide from '@/components/CTA/CreationGuide.vue'

export default {
    name: 'BackOffice',
    components: {
        CreationGuide,
        // FooterLayoutMobile

    }

}

</script>


<style scoped>

h1 {
    color: #fff;
    font-size: 24px;
    margin: 40px 20px 0;
    text-align: left;

}

span {
    color: #CE1137
}

p {
    color: #fff;
    text-align: left;
    font-size: 18px;
    margin: 24px 20px 20px;
}



</style>
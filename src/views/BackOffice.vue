<template>
<section class="backoffice">

    <div class="main_container">

            <h1>Bonjour User</h1>
            <p>Vous souhaitez :</p>

        <div class="container__backoffice__link">
           
            <ButtonBack linkContent="Créer un guide voyage" />
            <ButtonBack linkContent="Créer un guide voyage" />
            <ButtonBack linkContent="Créer un guide voyage" />
            <ButtonBack linkContent="Créer un guide voyage" />

        </div>

    </div>
  

    <!-- <FooterLayoutMobile /> -->
</section>

  
</template>

<script>

// import HeaderLayout from '@/components/HeaderLayout.vue'
// import FooterLayout from '@/components/FooterLayout.vue'
// import FooterLayoutMobile from '@/components/FooterLayoutMobile.vue'

import ButtonBack from '@/components/CTA/ButtonBack.vue'

export default {
    name: 'BackOffice',
    components: {
        ButtonBack,
        // FooterLayoutMobile

    }

}

</script>


<style>

body {
    background-color: #fff;
}

h1 {
    color: #1d1d1d;
    font-size: 24px;
    margin: 40px 20px 0;
    text-align: left;

}

p {
    color: #1d1d1d;
    font-weight: bold;
    text-align: left;
    font-size: 18px;
    margin: 24px 20px 20px;
}




</style>
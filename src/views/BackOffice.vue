<template>

 <div class="main_container">
    <HeaderLayout />
</div>

<section class="backoffice">
    <div class="main_container">
        <div class="backoffice-title">
            <h2>Bonjour <span>A DYNAMISER </span></h2>
            <h3>Vous souhaitez :</h3>
        </div>
        <div class="backoffice__card">
            <div class="backoffice__card-content">
                <ButtonBack linkContent="Créer votre guide de voyage"/>
            </div>
            <div class="backoffice__card-content">
                <ButtonBack linkContent="Créer un point d'intérêt"/>
            </div>
            <div class="backoffice__card-content">
                <ButtonBack linkContent="Accéder à mes guides de voyage"/>
            </div>
            <div class="backoffice__card-content">
                <ButtonBack linkContent="Accéder à la liste des points d'intérêts"/>
            </div>
        </div>
    </div>
 </section>

  
</template>

<script>

import HeaderLayout from '@/components/HeaderLayout.vue'
import ButtonBack from '@/components/CTA/ButtonBack.vue'

export default {
    name: 'BackOffice',
    components: {
        HeaderLayout,
        ButtonBack
        // FooterLayoutMobile

    }

}

</script>


<style>
@import url('../assets/css/style.css');
@import url('../assets/css/backoffice.css');



</style>
<template>
<div class="main_container">
  <NavbarConnected />
</div>
<section class="listguide">
  <div class="main_container">
    <Retour textBtn="Retour backoffice" />
    <div class="listguide__menu">
      <div class="listguide__menu-left">
        <h2>Liste des <span>guides de voyage</span></h2>
      </div>
      <div class="listguide__menu-right">
        <router-link to="/createguide">
        <Button btnName="Créer un nouveau guide" />
        </router-link>
      </div>
    </div>
  </div>
</section>

</template>

<script>
import NavbarConnected from '@/components/NavbarConnected.vue'
import Retour from '@/components/CTA/Retour.vue'
import Button from '@/components/Button.vue'



export default {
    name: 'ListeGuidesDeVoyages',
    components: {
      NavbarConnected,
      Retour,
      Button
    }

}
</script>

<style>
@import url('../assets/css/style.css');
@import url('../assets/css/listguide.css');


</style>
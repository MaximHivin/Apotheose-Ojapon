<template>
<section class="liste_guides_de_voyages">


  <div class="main_container">

    <div class="container__liste_guides_de_voyages">

      <Retour textBtn="Retour" />

      <h1>Liste des <span>Guides de Voyages</span></h1>

      <div class="container__liste_guides_de_voyages__card_pi">

        <Card />

      </div>

      <div class="container__liste_guides_de_voyages__button">

        <Button btnName="Créer un nouveau guide" />

      </div>

    </div>

  </div>
</section>
</template>

<script>

import Retour from '@/components/CTA/Retour.vue'
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'


export default {
    name: 'ListeGuidesDeVoyages',
    components: {
        Retour,
        Card,
        Button,
    }

}
</script>

<style>

h1 {
    color: #fff;
    text-align: left;
    margin: 80px 0;
    font-size: 2em;
   
}

span {
    color: #CE1137;

}

.container__liste_guides_de_voyages__button {
    text-align: center;
    margin-top: 5em;
}


</style>
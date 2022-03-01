<template>
  <div class="home">
    <ButtonBack linkContent="Accéder à la liste des points d'intérêts" />
    <Button btnName="Se connecter" />
    <Card/>
    <Ajouter/>
    <CirclePi/>
  </div>
</template>

<script>
// @ is an alias to /src

import ButtonBack from '@/components/CTA/ButtonBack.vue';
import Button from '@/components/Button.vue'
import CirclePi from '@/components/CirclePi.vue';
import Card from '@/components/Card.vue';
import Ajouter from '@/components/CTA/Ajouter.vue';

export default {
  name: 'HomeView',
  components: {
    ButtonBack,
    Card,
    Ajouter,
    CirclePi,
    Button
  }
}
</script>

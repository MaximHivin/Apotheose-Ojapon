<template>
  <div class="home">

    <Button btnName="Se connecter" />


  <div class="home">
    <Ajouter/>
    <CirclePi/>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'

import CirclePi from '@/components/CirclePi.vue';

import Ajouter from '@/components/CTA/Ajouter.vue';

export default {
  name: 'HomeView',
  components: {
    Ajouter,
    CirclePi,
    Button
  }
}
</script>

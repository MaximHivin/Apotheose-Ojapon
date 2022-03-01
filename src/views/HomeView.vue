<template>
  <div class="home">

    <Button btnName="Se connecter" />


  <div class="home">
    <CirclePi/>

  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'

import CirclePi from '@/components/CirclePi.vue';


export default {
  name: 'HomeView',
  components: {
    CirclePi,
    Button
  }
}
</script>

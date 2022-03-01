<template>
  <div class="home">
    <Button btnName="Se connecter" />
    <Card/>
    <Ajouter/>
    <CirclePi/>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'
import CirclePi from '@/components/CirclePi.vue';
import Card from '@/components/Card.vue';
import Ajouter from '@/components/CTA/Ajouter.vue';

export default {
  name: 'HomeView',
  components: {
    Card,
    Ajouter,
    CirclePi,
    Button
  }
}
</script>

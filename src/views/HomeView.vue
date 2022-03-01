<template>


  <div class="home">
    <Retour textBtn="Texte à mettre"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Retour from '@/components/CTA/Retour.vue';

export default {
  name: 'HomeView',
  components: {
    Retour
  }
}
</script>

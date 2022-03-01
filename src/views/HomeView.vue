<template>


  <div class="home">
    <Supprimer />
  </div>
</template>

<script>
// @ is an alias to /src

import Supprimer from '@/components/CTA/Supprimer.vue';

export default {
  name: 'HomeView',
  components: {
    Supprimer
  }
}
</script>

<template>


  <div class="home">
    <Ajouter/>
  </div>
</template>

<script>
// @ is an alias to /src

import Ajouter from '@/components/CTA/Ajouter.vue';

export default {
  name: 'HomeView',
  components: {
    Ajouter
  }
}
</script>

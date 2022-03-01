<template>


  <div class="home">
    <ButtonBack linkContent='Créer mon guide de voyage' />
  </div>
</template>

<script>
// @ is an alias to /src

import ButtonBack from '@/components/CTA/ButtonBack.vue';

export default {
  name: 'HomeView',
  components: {
    ButtonBack
  }
}
</script>

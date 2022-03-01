<template>


  <div class="home">
    <ButtonBack linkContent="Accéder à la liste des points d'intérêts" />
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

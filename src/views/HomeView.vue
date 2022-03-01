<template>


  <div class="home">
    <CirclePi/>
  </div>
</template>

<script>
// @ is an alias to /src

import CirclePi from '@/components/CirclePi.vue';

export default {
  name: 'HomeView',
  components: {
    CirclePi
  }
}
</script>

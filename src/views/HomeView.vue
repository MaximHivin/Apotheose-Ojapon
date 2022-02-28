<template>

  <div class="home">
    <HeaderLayout/>
    <HeaderLayoutMobile/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLayout from '@/components/HeaderLayout.vue';
import HeaderLayoutMobile from '@/components/HeaderLayoutMobile.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderLayout,
    HeaderLayoutMobile
  }
}
</script>

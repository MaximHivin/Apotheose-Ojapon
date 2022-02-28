<template>


  <div class="home">
    <HeaderLayout/>
    <HeaderLayoutMobile/>
    <FooterLayout />
    <FooterLayoutMobile />
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderLayout from '@/components/HeaderLayout.vue';
import HeaderLayoutMobile from '@/components/HeaderLayoutMobile.vue';
import FooterLayout from '@/components/FooterLayout.vue';
import FooterLayoutMobile from '@/components/FooterLayoutMobile.vue'

export default {
  name: 'HomeView',
  components: {
    FooterLayout,
    FooterLayoutMobile,
    HeaderLayout,
    HeaderLayoutMobile
  }
}
</script>

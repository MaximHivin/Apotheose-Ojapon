<template>


  <div class="home">
    <HeaderLayout/>
    <ConnectionLayout/>
    <FooterLayout />
    <FooterLayoutMobile />
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderLayout from '@/components/HeaderLayout.vue';
import FooterLayout from '@/components/FooterLayout.vue';
import FooterLayoutMobile from '@/components/FooterLayoutMobile.vue'
import ConnectionLayout from '@/components/ConnectionLayout.vue';


export default {
  name: 'HomeView',
  components: {
    FooterLayout,
    FooterLayoutMobile,
    HeaderLayout,
    ConnectionLayout,
    
  }
}
</script>

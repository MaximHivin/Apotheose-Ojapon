<template>
  <div>
    <FooterLayout />
    <FooterLayoutMobile />
  
  </div>
</template>

<script>
// @ is an alias to /src
import FooterLayout from '@/components/FooterLayout.vue';
import FooterLayoutMobile from '@/components/FooterLayoutMobile.vue'
export default {
  name: 'HomeView',
  components: {
    FooterLayout,
    FooterLayoutMobile,
    


  }
}
</script>

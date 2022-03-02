<template>


  <div class="home">
    <HeaderLayout/>
    <ConnectionLayout/>
    <ConnectionLayoutMobile/>
    <FooterLayout />
    <FooterLayoutMobile />
    <RegistrationForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationForm from '@/components/RegistrationForm.vue'
/*
import HeaderLayout from '@/components/HeaderLayout.vue';
import FooterLayout from '@/components/FooterLayout.vue';
import FooterLayoutMobile from '@/components/FooterLayoutMobile.vue'
import ConnectionLayout from '@/components/ConnectionLayout.vue';
import ConnectionLayoutMobile from '@/components/ConnectionLayoutMobile.vue'
*/

export default {
  name: 'HomeView',
  components: {
    RegistrationForm,
  /*  FooterLayout,
    FooterLayoutMobile,
    HeaderLayout,
    ConnectionLayout,
    ConnectionLayoutMobile, 
    */
  }
}
</script>

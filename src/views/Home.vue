<template>
<<<<<<< HEAD
    <ConnectionLayout />
=======
  <div class="home">
    <HeaderLayout/>
    <FooterLayout/>
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>On a plus qu'à bosser les copains :D</h1>
  </div>
>>>>>>> develop
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import ConnectionLayout from '@/components/ConnectionLayout.vue'




export default {
  name: 'Home',
  components: {
    ConnectionLayout,
    
    
    
=======

import HeaderLayout from '@/components/Headerlayout.vue'
import FooterLayout from '@/components/FooterLayoutMobile.vue'

export default {
  name: 'Home',
  components: { 
    FooterLayout,
    HeaderLayout

>>>>>>> develop
  }
}
</script>
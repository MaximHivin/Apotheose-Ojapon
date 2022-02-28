<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to O'Japon"/>
    <Button btnName="se connecter" /><br><br>
    <Button btnName="s'inscrire" /><br><br>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/Button.vue'



export default {
  name: 'Home',
  components: {
    HelloWorld,
    Button,

  }
}
</script>


<style scoped>

</style>
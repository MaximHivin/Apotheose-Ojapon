<template>

  <div class="home">
    <HeaderLayout/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLayout from '@/components/HeaderLayout.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderLayout
  }
}
</script>

<template>
  <div class="home">
    
    <HeaderLayout/>
    <LeJaponLayout/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLayout from '@/components/HeaderLayout.vue'
import LeJaponLayout from '@/components/LeJaponLayout.vue'

export default {
  name: 'Home',
  components: {
    HeaderLayout,
    LeJaponLayout
  }
}
</script>

<template>
  <div>
    <h1>This is a Maxime Components Page</h1>
    <Retour />
    <CreationGuide />
  </div>
</template>

<script>

import Retour from '@/components/CTA/Retour.vue'
import CreationGuide from '@/components/CTA/CreationGuide.vue'


export default {
    name: 'ComposantsMaxime',
    components: {
        Retour,
        CreationGuide,

    }

}
</script>

<style scoped>


</style>
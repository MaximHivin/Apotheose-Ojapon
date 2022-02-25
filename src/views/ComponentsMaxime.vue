<template>
  <div>
    <h1>This is a Maxime Components Page</h1>
    <Retour />
    <CreationGuide />
    <Ajouter />
    <Supprimer />
  </div>
</template>

<script>

import Retour from '@/components/CTA/Retour.vue'
import CreationGuide from '@/components/CTA/CreationGuide.vue'
import Ajouter from '@/components/CTA/Ajouter.vue'
import Supprimer from '@/components/CTA/Supprimer.vue'


export default {
    name: 'ComposantsMaxime',
    components: {
        Retour,
        CreationGuide,
        Ajouter,
        Supprimer,

    }

}
</script>

<style scoped>



</style>
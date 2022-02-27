<template>
  <div>
    <h1>Components Page</h1>
    <Retour />
    <CreationGuide linkContent="Créer un point d'intérêt" />
    <CreationGuide linkContent="Créer un guide de voyage" />
    <CreationGuide linkContent="Accéder à la liste des points d'intérêts" />
    <CreationGuide linkContent="Accéder à un guide de voyage" />
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

div {
  margin: 0 20px;
}


</style>
<template>
  <div class="home">
    <RegistrationForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationForm from '@/components/RegistrationForm.vue'
// import TextArea from '@/components/formulaire/TextArea.vue'
// import Tag from '@/components/formulaire/Tag.vue'
// import InputText from '@/components/formulaire/InputText.vue'
// import Supprimer from '@/components/CTA/Supprimer.vue';
// import Retour from '@/components/CTA/Retour.vue';
// import ButtonBack from '@/components/CTA/ButtonBack.vue';
// import Button from '@/components/Button.vue'
// import CirclePi from '@/components/CirclePi.vue';
// import Card from '@/components/Card.vue';
// import Ajouter from '@/components/CTA/Ajouter.vue';

export default {
  name: 'HomeView',
  components: {
    RegistrationForm,
  // Supprimer
  //   Retour,
  //   ButtonBack,
  //   Card,
  //   Ajouter,
  //   CirclePi,
  //   Button
  // InputText
  // Tag
  // TextArea
  }
}
</script>
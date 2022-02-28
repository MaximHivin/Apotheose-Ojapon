<template>
  <h1>Mes composants</h1>
  <InputText />
  <Button btnName="se connecter" /><br><br>
  <Button btnName="s'inscrire" /><br><br>
</template>

<script>

import InputText from '@/components/formulaire/InputText.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Composant',
  components: {
    InputText,
    Button
  }
}
</script>

<style>

</style>
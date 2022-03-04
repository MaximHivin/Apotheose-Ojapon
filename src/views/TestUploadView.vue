<template>
  <div>
      <h1>Test upload API</h1>
      <fieldset>
            <label class="email_mdp" for="username">Choisir un fichier :</label>
            <InputText name="file" id="file" placeholder="choose a file..." type="file" @inputChange="updateInputValue" />
        </fieldset>
        <div class="center-button">
            <Button v-on:click="uploadImg" btnName="Télécharger"/>
        </div>
  </div>
</template>

<script>
import InputText from '@/components/formulaire/InputText.vue';
import Button from '@/components/Button.vue';

export default {
    name: 'TestUploadView', 
    components: {
        InputText,
        Button
    }
}
</script>

<style>

</style>
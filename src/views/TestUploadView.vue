<template>
  <div>
      <h1>Test upload API</h1>
      <fieldset>
            <label for="file">Choisir un fichier :</label>
            <input @change="upload($event)" name="file" id="file" placeholder="choose a file..." type="file" class="container__inputText-content">
        </fieldset>
        <div class="center-button">
            <Button v-on:click="uploadImg" btnName="Télécharger"/>
        </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    name: 'TestUploadView', 
    components: {
        Button
    },
    data () {
        return {
            errors: [],
            success: null,
            formData: {
                password: '',
                username: ''
            }
        }
    },
    methods: {
        upload: function (event) {
            console.log('method upload file input');
            console.log(event);
            //this.formData[value.name] = value.value
        },
        uploadImg() {
            
        }
    }
}
</script>

<style>
.container__inputText-content{
    padding-left: 2.4em;
    padding-top: 1.6em;
    padding-bottom: 1.6em; 
    border-radius: 5px;
    border:none;
    background-color:#F1F1F1 ;
    color: var(--secondary-color);
    font-size: 1.6em;
    font-family: 'Fellix Medium';
    font-weight: 500;
    width: 100%;
    box-sizing: border-box; 
}

.container__inputText-content::placeholder{
    color:var(--regular-black);
    font-weight: 500;
}
</style>
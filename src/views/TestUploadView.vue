<template>
  <div>
        <h1>Test upload API</h1>
        <div class="errors" v-if="errors.length > 0">
            <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <div class="success" v-if="success">
            <p>{{ success }}</p>
        </div>
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
import UploadMediaService from '@/services/UploadMediaService.js';

export default {
    name: 'TestUploadView',
    components: {
        Button
    },
    data () {
        return {
            errors: [],
            success: null,
            dataForm: new FormData(),
            file: File
        }
    },
    methods: {
        upload: function (event) {
            this.file = event.target.files[0];
            this.dataForm.append('file', this.file);
        },
        uploadImg() {
            // call to api
            console.log('uploadImg et call to api');
            UploadMediaService.uploadMedia(this.dataForm, (data) => {
                    // I check the type of response and I display
                    // the message accordingly
                    if(data.type === "success") {
                        this.success = data.message;
                    } else {
                        this.errors.push(data.message);
                    }
                });
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
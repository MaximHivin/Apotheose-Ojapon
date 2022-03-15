<template>
    <div class="new-comment-container">
        <h2>Commenter la recette</h2>
        <fieldset>
            <div class="field">
                <TextArea name="content" id="content" placeholder="Partagez votre expérience sur ce point d'intérêt ! Subjectivité requise ! :)" @inputChange="updateInputValue" /> 
                <label class="mdp_cmdp" for="notation">Ma note sur 5</label>
                <InputText name="notation" id="notation" placeholder="Note de 0 à 5" type="text" @inputChange="updateInputValue" /> 
            </div>
        </fieldset>
        <Button v-on:click="createComment" btnName="Envoyer mon commentaire"/>
    </div>
</template>

<script>
import CommentsService from '@/services/CommentsService.js';
import TextArea from '@/components/formulaire/TextArea.vue';
import InputText from '@/components/formulaire/InputText.vue';
import Button from '@/components/Button.vue';

export default {
    name: "NewCommentLayout",
    components: {
        TextArea,
        InputText,
        Button
    },
    data() {
        return {
            errors: [],
            // Correspond au textarea
            formData: {
                content: null,
                notation: 0
            },            
            userID : this.$store.state.userID,
            // Correspond au param de l'URL
            poiId: 78
        }
    },
    methods: {
        updateInputValue: function (value) {
            this.formData[value.name] = value.value
        },
        createComment() {
            // On appelle le service pour inserer un  nouveau commentaire
            CommentsService.insert({
                post: this.poiId,
                content: this.formData.content,
                meta: {"notation": this.formData.notation}
            }, () => {
                this.$emit('new_comment', true);
                console.log('INSERTION FINIE');
            })
        }
    }
}
</script>

<style scoped>

</style>
<template>
    <div class="comments-container">
        <NewCommentLayout @new_comment="updateCommentsList" v-if="this.$store.state.token"/>
        <h1>Commentaires</h1>
        <div v-if="comments.length >0">
            <CommentLayout 
                @deleted_comment="updateCommentsList" 
                v-for="comment in comments" :key="comment.id" 
                v-bind:id="comment.id" 
                v-bind:author="comment.author_name" 
                v-bind:date="comment.date" 
                v-bind:content="comment.content.rendered" 
            />
        </div>
        <div v-else>Aucun commentaire pour l'instant</div>
    </div>
</template>

<script>
import NewCommentLayout from '@/components/comments/NewCommentLayout.vue';
import CommentLayout from '@/components/comments/CommentLayout.vue';
//import CommentsService from '@/services/CommentsService.js';
import POIService from '@/services/POIService.js';

export default {
    name: "CommentsLayout",
    data() {
        return {
            errors: [],
            comments: [],
        }
    },
    components: {
        NewCommentLayout,
        CommentLayout
    },
    methods: {
        getComments() {
            // this.$route.params.id --> à la place de l'id en dur
            const poiId = 78;
            POIService.findById(poiId).then(
                (response) => {
                    console.log('RESPONSE COMMENTS LAYOUT', response.data);
                    this.comments = response.data._embedded.replies ? response.data._embedded.replies[0] : [];
                    console.log('COMMENTAIRES', this.comments);
                }
            )
        },
        updateCommentsList() {
            this.getComments();
        }
    },
    mounted() {
        this.getComments();
        // Executer la requete pour recuperer la liste des commentaires
    }
}


</script>

<style scoped>
    .comments-container {
        margin-bottom: 5em;
    }
</style>
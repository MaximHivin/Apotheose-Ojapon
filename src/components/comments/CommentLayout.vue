<template>
  <article class="comment">
      <p>Posté par <span v-html="author"></span> le <span>{{ formattedDate }}</span></p>
      <div v-html="content"></div>
  </article>
</template>

<script>
//import CommentsService from '@/services/CommentsService.js';

export default {
    name: "CommentLayout",
    props: {
        author: String,
        content: String,
        date: String,
        id: Number
    },
    data() {
        return {
            formattedDate: null
        }
    },
    mounted() {
        
        const customDate = new Date(this.date);
        this.formattedDate = customDate.getDate() +"-" + (customDate.getMonth()+1) + "-" + customDate.getFullYear();
        
    }
}
</script>

<style scoped>
    .comment {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .comment p,
    .comment div {
        color: white;
        font-size: 2em;
    }
</style>
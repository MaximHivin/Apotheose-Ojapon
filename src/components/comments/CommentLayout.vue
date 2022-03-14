<template>
  <article class="comment">
      <p>Posté par <span v-html="author"></span> le <span>{{ date }}</span></p>
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
        date: Date,
        id: Number
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
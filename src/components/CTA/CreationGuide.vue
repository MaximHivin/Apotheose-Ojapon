<template>
  <div class="btn-creation-guide">
      <a href="x" class="create-link">Créer votre guide de voyage</a>
      <img alt="arrow right" src="@/assets/arrow-right.svg">
  </div>
</template>

<script>
export default {
    name: 'CreationGuide'

}
</script>

<style scoped>

    .btn-creation-guide {
      
        /* A supprimer après validation */
        margin: 20px;
        /* *********************************** */
        position: relative;
        display: flex;
        align-items: center;
        text-align: left;
        padding-left: 40px;
        width: 812px;
        height: 110px;
        background-color: #CE1137;
        font-weight: bold;
        font-size: 18px;

    }

    img {
        position: absolute;
        right: 40px;
        width: 63px;
        height: 32px;
    }

    .create-link {
        text-decoration: none;
        color: #fff;
    }

</style>
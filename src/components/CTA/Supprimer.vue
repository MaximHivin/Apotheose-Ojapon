<template>
  <div class="add-element">
      <img alt="trash icon" src="@/assets/trash.svg">
  </div>
</template>

<script>
export default {
    name: 'Supprimer',

}
</script>

<style>

    .add-element {

        /* A supprimer après validation */
        margin: 20px;
        /* *********************************** */

        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: #CE1137;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        height: 22px;
    }

</style>
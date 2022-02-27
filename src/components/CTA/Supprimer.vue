<template>
  <div class="delete-element">
      <img alt="trash icon" src="@/assets/trash.svg">
  </div>
</template>

<script>
export default {
    name: 'Supprimer',

}
</script>

<style>

    .delete-element {
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

    @media screen and (max-width: 375px) {

        .delete-element {
            height: 40px;
            width: 40px;
        }
        

    }



</style>
<template>
  <div class="add-element">
      <img alt="add icon" src="@/assets/plus.svg">
  </div>
</template>

<script>
export default {
    name: 'Ajouter',

}
</script>

<style>

    .add-element {
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

        .add-element {
            height: 40px;
            width: 40px;
        }
        

    }

</style>
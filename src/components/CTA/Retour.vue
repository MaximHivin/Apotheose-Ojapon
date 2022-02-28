<template>

<div class="btn-retour">
    <img alt="arrow left" src="@/assets/arrow-left.svg">
    <span>Retour</span>
</div>

</template>

<script>
export default {
    name: 'Retour',


}
</script>

<style scoped>

    .btn-retour {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        color: #1D1D1D;

    }

    img {
        width: 36px;
        height: 32px;
    }

     @media screen and (max-width: 375px) {

         .btn-retour {
             font-size: 14px;
                      }
     }

</style>
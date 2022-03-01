<template>

<a href="#" class="return">
    <div class="return__content">
        <img class="return__content-left" alt="arrow left" src="@/assets/arrow-left.svg">
        <span class="return__content-right">Retour</span>
    </div>
</a>

</template>

<script>
export default {
    name: 'Retour',


}
</script>

<style scoped>
@import url('../../assets/css/style.css');

    .return__content {
        display: flex;
        align-items: center;
    }

    .return__content-right {
        font-size: 1.8em;
        font-family: 'Fellix SemiBold';
        margin-left: 0.8em; 
        /* color: var(--secondary-color) */
        color:#fff;
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
<template>
<div class="example">
<div class="btn-retour">
    <img alt="arrow left" src="@/assets/arrow-left.svg">
    <span>Retour</span>
</div>
</div> 
</template>

<script>
export default {
    name: 'Retour',


}
</script>

<style scoped>

    .example {
        margin: 0 150px;
    }

    .btn-retour {
        display: flex;
        align-items: center;
        width: 36px;
        height: 32px;
        font-size: 18px;
        font-weight: bold;
        color: #1D1D1D;

    }

</style>
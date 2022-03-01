<template>
<a href="#" class="add">
  <div class="add__element">
      <img alt="add element" src="@/assets/plus.svg">
  </div>
  </a>
</template>

<script>
export default {
    name: 'Ajouter',

}
</script>

<style>
@import url('../../assets/css/style.css');

    .add{
        display:inline-block;
    }

    .add__element {
        height: 5em;
        width: 5em;
        border-radius: 50%;
        background-color: var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        transition-property: margin-top;
        transition-duration: 0.2s;
        transition-delay: 0.5ms;
    }

    .add__element:hover{
        margin-top: 1.2em;
    }

    img {
        height: 2.2em;
    }

    @media screen and (max-width: 375px) {

        .add__element {
            height: 4em;
            width: 4em;
        }
        

    }

</style>
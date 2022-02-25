<template>
  <div class="composants-maxime">
        <div class="btn-components">
          <a href="" class="btn-connection">se connecter</a>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Button',

}
</script>

<style>

    .btn-connection {
       width: 196px;
       height: 54px;
       background-color: #CE1137;
       color: #fff;
       font-weight: bold;
       font-size: 18px;
       padding: 16px 24px;
       border-radius: 10px; 
       text-decoration: none;
       
    }

    .btn-connection:hover {
        background-color: #fff;
        border: 1px solid #CE1137;
        color: #CE1137;
        transition: 400ms ease-in-out;
    }

</style>
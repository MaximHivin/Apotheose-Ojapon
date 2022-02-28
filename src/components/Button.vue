<template>
  
    <div class="btn-components">
      <a href="" class="btn-connection">{{ btnName }}</a>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
      btnName: String
    }


}
</script>

<style>

    .btn-connection {
       width: 196px;
       height: 54px;
       line-height: 54px;
       background-color: #CE1137;
       padding: 16px 24px;
       border-radius: 10px;   
       font-weight: bold;
      font-size: 18px;
      text-decoration: none;
      color: #fff;
    }

    .btn-connection:hover {
        background-color: #fff;
        border: 1px solid #CE1137;
        color: #CE1137;
        transition: 400ms ease-in-out;
    }

    

    @media screen and (max-width: 375px) {

    }

</style>
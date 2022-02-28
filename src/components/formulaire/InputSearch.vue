<template>
  <div class="container_searchbar">
      <input type="text" name="searchbar" id="searchbar" placeholder="Ou voulez-vous aller" class="searchbar">
  </div>
</template>

<script>
export default {

}
</script>

<style>

.searchbar{
    max-width: 600px;
}

.searchbar input{
    padding: 16px;
    border-radius: 10px;
    border: 1px solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box; 
}

.searchbar input::placeholder{
    color:#ADADAD;
    font-weight: 500;
}

 @media screen and (max-width: 375px){
    .searchbar{
        width: 302px;
        margin: 0 auto;
    }
} 


</style>
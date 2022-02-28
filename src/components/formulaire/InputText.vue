<template>
  <div class="container_inputText">
      <input type="text" name="inputText" id="inputText" placeholder="Votre texte" class="inputText">
  </div>
</template>

<script>
export default {
     

}
</script>

<style>

.container_inputText{
    max-width: 748px;
}

.inputText{
    padding-left: 24px;
    padding-top: 32px;
    padding-bottom: 32px; 
    border-radius: 10px;
    border: 1px solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box; 
}

.inputText::placeholder{
    color:#ADADAD;
    font-weight: 500;
}

 @media screen and (max-width: 375px){
    .container_inputText{
        width: 302px;
        margin: 0 auto;
    }

    .inputText{
        padding: 16px;
    }
} 


</style>
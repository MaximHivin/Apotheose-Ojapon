<template>

<div class="container_textarea">
    <textarea name="textarea" id="textarea" class="textarea" placeholder="Merci d'écrire ici votre message"></textarea>
</div>

</template>

<script>
export default {


}
</script>

<style>

.container_textarea{
    max-width: 748px;
}

.container_textarea textarea{
    padding-top: 32px;
    padding-left: 24px;
    background-color: #F1F1F1;
    width: 100%;
    min-height: 226px;
    color: #1d1d1d;
    font-size: 16px;
    box-sizing: border-box;
}

.container_textarea textarea::placeholder{
    color: #ADADAD;
    font-weight: 500;
}

 @media screen and (max-width: 375px){
    .container_textarea{
        width: 302px;
        margin: 0 auto;
        height:50px;
    }
} 


</style>
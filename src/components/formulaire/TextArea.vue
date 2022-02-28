<template>
<div class="container_textarea">
    <textarea name="textarea" id="textarea" class="textarea" placeholder="Merci d'écrire votre message.."></textarea>
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

.textarea{
    padding-top: 32px;
    padding-left: 24px;
    width: 100%;
    border: 1px solid #F1F1F1;
    background-color: #F1F1F1;
    color: #1d1d1d;
    font-size: 16px;
    font-weight: 500;
    min-height: 226px;
    box-sizing: border-box;
    resize: none;
}

.textarea::placeholder{
    color:#ADADAD;
}


@media screen and (max-width: 375px){
    .container_textarea{
        max-width: 302px;
        margin: 0 auto;
    }

    .textarea{
        padding: 16px;
        min-height: 150px;
    }
}

</style>
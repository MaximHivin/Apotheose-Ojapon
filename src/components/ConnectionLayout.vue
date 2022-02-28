<template>
<section class="ConnectionLayout">
    <div class="main_container">
        <h1 class="Title">Connectez-vous à votre compte</h1>
        <div class="inputs">
            <p class="email">Votre email</p>
          <input v-model="Email" class="inputs_g" type="text" placeholder="Email">
            <p class="mdp">Votre mot de passe</p>  
            <input v-model="password" class="inputs_d" type="password" placeholder="Password">
        </div>
    </div> 
</section>
        
        

        
     
    

</template>

<script>
export default {
    name: "ConnectionLayout",    

}
 
</script>

<style scoped>

.main_container {
     max-width : 1642px;
     margin: 0 auto;
}

.inputs_g{
    display: inline;
    text-align: center;
    top: 393px;
    left: 140px;
    width: 812px;
    height: 83px;
    /* UI Properties */
    background: var(--unnamed-color-f1f1f1) 0% 0% no-repeat padding-box;
    background: #F1F1F1 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
}

.inputs_d{
    display: inline;
    text-align: center;
    top: 393px;
    left: 140px;
    width: 812px;
    height: 83px;
    /* UI Properties */
    background: var(--unnamed-color-f1f1f1) 0% 0% no-repeat padding-box;
    background: #F1F1F1 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
}
.Title {
    text-align: left;
}


</style>
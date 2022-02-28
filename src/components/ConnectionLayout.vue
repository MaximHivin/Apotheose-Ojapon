<template>
<section class="ConnectionLayout">
<div class="main_container">
    <div class="connexion">
        <h1>Connectez-vous à votre compte</h1>
    </div>
    <div class="email_mdp">
        <p class="email">Votre email:</p>
        <p class="mdp">Votre mot de passe:</p>
        </div>
        
        
        
        <div class="container_inputText">
            <div class="input_left">
      <input  type="text" name="inputText" id="inputText" placeholder="*******" class="inputText">
      </div>
      <div class="input_right">
      <input type="text" name="inputText" id="inputText" placeholder="*******" class="inputText">
      </div>
  </div>
  <div class="text_mdp">
            <p>Mot de passe oublié ?</p>
        </div>
        <div class="button">
        <a href="#" class="btn_connexion">Se connecter</a>
        </div>

        
        <div class="inscription">
            <h1>Pas encore de compte ?</h1>
        </div>

        <div class="button_2">
        <a href="#" class="btn_create">Créez un compte</a>
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
     background-color: white;
}

.connexion {
    text-align: left;
    color: black;
    font-weight: bold;
    padding-left: 122px;
    padding-top: 50px;
    margin-top: 35px;
}
    


.email_mdp {
    display: flex;
    font-weight: bold;
    color: black;
}

.email {
    margin-left: 122px;
}

.mdp {
    margin: auto;
    padding-right: 65px;
}

.container_inputText{
    display: flex;

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
.input_left {
    border-radius: 10px;
    border: 1px solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    margin-left: 116px;
    margin-right: 18px;
}


.input_right {
    border-radius: 10px;
    border: 1px solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    margin-right: 140px;
}

.button {
    width: 156px;
    height: 54px;
    line-height: 54px;
    background-color: #CE1137;
    /* padding: 16px 24px; */
    border-radius: 10px;
    font-weight: bold;
    /* font-size: 18px; */
    text-decoration: none;
    color: #fff;
    margin-left: 122px;
    margin-top: 35px;
}

.btn_connexion {
    
        border: 1px solid #CE1137;
        color: white;
        transition: 400ms ease-in-out;
        text-decoration: none;
}

.button_2 {
    width: 156px;
    height: 54px;
    line-height: 54px;
    background-color: #CE1137;
    /* padding: 16px 24px; */
    border-radius: 10px;
    font-weight: bold;
    /* font-size: 18px; */
    text-decoration: none;
    color: #fff;
    margin-left: 122px;
    margin-top: 35px;
}

.btn_create {
    border: 1px solid #CE1137;
    color: white;
    transition: 400ms ease-in-out;
    text-decoration: none;
    
}



    

    @media screen and (max-width: 375px) {

    }

    .text_mdp {
    text-align: right;
    margin-right: 140px;
    font-weight: bold;
    }

    .inscription {
    text-align: left;
    margin-left: 122px;
    margin-top: 80px;
    margin-bottom: 56px;
    }

</style>


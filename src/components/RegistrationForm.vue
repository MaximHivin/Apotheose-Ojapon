<template>
<section>
    <div class="main_container">
        <div class="inscription">
            <h1>Inscrivez-vous</h1>
            </div>
            <div class="prenom_email">
            <p class="prenom">Votre prénom:</p>
            <p class="email">Votre email:</p>
            </div>
            <div class="container_inputText">
                <div class="input_top_left">
      <input type="text" name="inputText" id="inputText" placeholder="Votre texte" class="container__inputText-content"> 
      </div>   
            
      <div class="input_top_right">    
      <input type="text" name="inputText" id="inputText" placeholder="Votre texte" class="container__inputText-content">
  </div>
  </div>
            <div class="mdp_cmdp">
            <p class="mdp">Votre mot de passe:</p>
            <p class="cmdp">Confirmez votre mot de passe:</p>
            </div>
            <div class="container_inputText_bottom">
                <div class="container_bottom_left">
      <input type="text" name="inputText" id="inputText" placeholder="Votre texte" class="container__inputText-content">
      </div>
      <div class="container_bottom_right">
      <input type="text" name="inputText" id="inputText" placeholder="Votre texte" class="container__inputText-content">
  </div>
  </div>
  
            <div class="button_top">
            <a href="#" class="btn_connexion">Créez mon compte</a>
        </div>

        <div class="Connection">
            <h2>Vous avez déjà un compte ?</h2>
        </div>

        <div class="button_bottom">
            <a href="#" class="btn_create">Se connecter</a>
        </div>

            


        
        


    </div>
</section>
</template>

<script>
export default {
    name: "RegistrationForm",
}
</script>

<style scoped>
.main_container {
    max-width: 102.625em;
    margin: 0 auto;
    background-color: white;
    padding-bottom: 15em;
    
}

.inscription {
    text-align: left;
    color: black;
    padding-left: 3.5em;
    padding-top: 3.125em;
    margin-top: 2.188em;
    font-family: "Fellix SemiBold";
    font-size: 2.0em;
}

.prenom_email {
    display: flex;
    font-weight: bold;
    color: black;
    font-family: "Fellix SemiBold";
    font-size: 1.500em;
}

.prenom {
    margin-left: 5em;
}

.email {
    margin: auto;
    padding-right: 6em;
}

.container_inputText {
    display: flex;
}

.container__inputText-content {
    padding-left: 1.500em;
    padding-top: 2.000em;
    padding-bottom: 2.000em; 
    border-radius: 0.625em;
    border: 0.063em solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 1.000em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;  
}

.input_top_left {
    border-radius: 0.625em;
    border: 0.063em solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 1.000em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    margin-left: 7.250em;
    margin-right: 1.125em;
}

.input_top_right {
    border-radius: 0.625em;
    border: 0.063em solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 1.000em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    margin-right: 8.750em;
}

.mdp_cmdp {
    display: flex;
    font-weight: bold;
    color: black;
    font-family: "Fellix SemiBold";
    font-size: 1.500em;
}

.mdp {
    margin-left: 5em;
    padding-top: 2.5em;
}

.cmdp {
    margin: auto;
    padding-top: 2.5em;
    
}

.container_inputText_bottom {
    display: flex;
}

.container_bottom_left {
    border-radius: 0.625em;
    border: 0.063em solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 1.000em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    margin-left: 7.250em;
    margin-right: 1.125em;
}

.container_bottom_right {
    border-radius: 0.625em;
    border: 0.063em solid #F1F1F1;
    background-color:#F1F1F1 ;
    color: #1d1d1d;
    font-size: 1.000em;
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    margin-right: 8.750em;
}

.button_top {
    width: 180px;
    height: 3.375em;
    line-height: 3.375em;
    background-color: #CE1137;
    /* padding: 16px 24px; */
    border-radius: 0.625em;
    font-weight: bold;
    /* font-size: 18px; */
    text-decoration: none;
    color: #fff;
    margin-left: 7.5em;
    margin-top: 2.188em;
    margin-bottom: 2.5em;
}

.btn_connexion {
    
    border: 0.750em solid #CE1137;
    color: white;
    transition: 400ms ease-in-out;
    text-decoration: none;
}

.Connection {
   text-align: left;
    margin-left: 3.7em;
    margin-top: 6.063em;
    margin-bottom: 3.375em;
    font-family: "Fellix SemiBold";
    font-size: 2em;
    color: black;
}

.button_bottom {
    width: 7.813em;
    height: 3.375em;
    line-height: 3.375em;
    background-color: #CE1137;
    /* padding: 16px 24px; */
    border-radius: 0.625em;
    font-weight: bold;
    /* font-size: 18px; */
    text-decoration: none;
    color: #fff;
    margin-left: 7.625em;
    margin-top: 2.188em;
    font-family: "Fellix Bold";
}

.btn_create {
    border: 0.750em solid #CE1137;
    color: white;
    transition: 400ms ease-in-out;
    text-decoration: none;
    
}






</style>




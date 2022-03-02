<template>
    <section class="ConnectionLayout">
        <div class="main_container">
            <div class="connexion">
                <h1>Connectez-vous à votre compte</h1>
            </div>
            <p>Résultat : {{ formData }}</p>
            <div>
                <label for="email">Votre email :</label>
                <InputText name="email" id="email" placeholder="johndoe@gmail.com" type="text" @inputChange="updateInputValue" />
            </div>
            <div>
                <label for="password">Votre mot de passe :</label>
                <InputText name="password" id="password" placeholder="********" type="password" @inputChange="updateInputValue" />
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
            <Button btnName="Se connecter" />

            
            <div class="inscription">
                <h1>Pas encore de compte ?</h1>
            </div>

            <Button btnName="S'inscrire" />

        </div> 

    </section>
     
</template>

<script>
import InputText from '@/components/formulaire/InputText.vue';
import Button from '@/components/Button.vue';

export default {
    name: "ConnectionLayout", 
    components: {
        InputText,
        Button
    },
  data () {
    return {
      formData: {
        password: '',
        email: ''
      }
    }
  },
  methods: {
    updateInputValue: function (value) {
      this.formData[value.name] = value.value
    }
  } 

}
 
</script>

<style scoped>

.main_container {
    max-width: 102.625em;
    margin: 0 auto;
    background-color: white;
    padding-bottom: 15.000em;
    
}

.connexion {
    text-align: left;
    color: black;
    padding-left: 3em;
    padding-top: 3.125em;
    margin-top: 2.188em;
    font-family: "Fellix SemiBold";
    font-size: 2.375em; 
}
.email_mdp {
    display: flex;
    font-weight: bold;
    color: black;
    font-family: "Fellix SemiBold";
    font-size: 1.500em;
}

.email {
    margin-left: 5em;
}

.mdp {
        margin: auto;
    padding-right: 2.5em;
}

.container_inputText{
    display: flex;

}

.inputText{
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

.inputText::placeholder{
    color:#ADADAD;
    font-weight: 500;
}

 @media screen and (max-width: 23.438em){
    .container_inputText{
    width: 18.875em;
    margin: 0 auto;
    }

    .inputText{
    padding: 1.000em;
    }
} 
.input_left {
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


.input_right {
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

.button {
    width: 9.750em;
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

.btn_connexion {
    
    border: 0.063em solid #CE1137;
    color: white;
    transition: 400ms ease-in-out;
    text-decoration: none;
}

.button_2 {
    width: 9.750em;
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
    border: 0.063em solid #CE1137;
    color: white;
    transition: 400ms ease-in-out;
    text-decoration: none;
    
}



    

    @media screen and (max-width: 23.438em) {

    }

    .text_mdp {
    text-align: right;
    margin-right: 8.750em;
    font-family: "Fellix SemiBold";
    font-size: 1.125em;
    }

    .inscription {
    text-align: left;
    margin-left: 3em;
    margin-top: 5.000em;
    margin-bottom: 3.500em;
    font-family: "Fellix SemiBold";
    font-size: 2.375em;
    color: black;
    }

</style>


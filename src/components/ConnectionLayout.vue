<template>
    <section class="ConnectionLayout">
        <div class="main_container">
            <div class="connexion">
                <h1>Connectez-vous à votre compte</h1>
            </div>
            <div class="errors" v-if="errors.length > 0">
                <p v-for="error in errors" :key="error">{{ error }}</p>
            </div>
            <div class="success" v-if="success">
                <p>{{ success }}</p>
            </div>
            <fieldset>
                <label class="email_mdp" for="username">Votre nom d'utilisateur :</label>
                <InputText name="username" id="username" placeholder="johndoe" type="text" @inputChange="updateInputValue" />
            </fieldset>
            <fieldset>
                <label class="email_mdp" for="password">Votre mot de passe :</label>
                <InputText name="password" id="password" placeholder="********" type="password" @inputChange="updateInputValue" />
            </fieldset>

            <div class="text_mdp">
                <p>Mot de passe oublié ?</p>
            </div>
            <div class="center-button">
                <Button v-on:click="sendForm" btnName="Se connecter"/>
            </div>

            <div class="inscription">
                <h1>Pas encore de compte ?</h1>
            </div>
            <div class="center-button">
                <Button btnName="S'inscrire" />
            </div>
            <router-link :to="'/backoffice/poi/add'">Add POI</router-link> | 
            <router-link :to="'/test-createguide'">Test CreateGuide</router-link>
            

        </div> 

    </section>
     
</template>

<script>
import InputText from '@/components/formulaire/InputText.vue';
import Button from '@/components/Button.vue';
import UsersService from '@/services/UsersService.js'

export default {
    name: "ConnectionLayout", 
    components: {
        InputText,
        Button
    },
    data () {
        return {
            errors: [],
            success: null,
            formData: {
                password: '',
                username: ''
            }
        }
    },
    methods: {
        updateInputValue: function (value) {
            this.formData[value.name] = value.value
        },
        sendForm() {
            // on commence par vider le tableau des erreurs (en cas de second submit suite à une erreur, il y a au moins un item dedans, et on souhaite éviter les messages d'erreur en doublon)
            this.errors.length = 0;
            this.success = null;
            // récupérer toutes les données du formulaire
                // on les a déjà dans data...
            // valider ces données
            if(!this.formData.username) {
                console.log("no id");
                this.errors.push('Please enter your email or nickname');
            }
            if(!this.formData.password) {
                this.errors.push('Please enter your password');
            }
            // renvoyer des messages d'erreur en cas de non validation
            //exécuter une requête asynchrone pour connecter un utilisateur
            if (this.errors.length > 0) {
                console.log("Ça va pas du tout, fais ça correctement stp !");
                console.log(this.errors);
            } else {
                console.log('send form !');
                // on exécute la requête pour récupérer un token
                UsersService.connect({
                    username: this.formData.username,
                    password: this.formData.password
                }, (data) => {
                    console.log(data);
                    // Je verifie le type de réponse et j'affiche
                    // le message en consequence
                    if(data.type === "success") {
                        this.success = data.message;
                    } else {
                        this.errors.push(data.message);
                    }
                });
            }
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

.center-button {
    display: flex;
    flex-direction: column;
    align-items: center;
}
fieldset {
    border: 0;
    margin-bottom: 2em;
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


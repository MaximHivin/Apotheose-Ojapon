<template>
<section>
    <div class="main_container">
        <div class="titre-principal">
            <h1>Inscrivez-vous</h1>
        </div>
            <div class="errors" v-if="errors.length > 0">
                <p v-for="error in errors" :key="error">{{ error }}</p>
                </div>
                <div class="success" v-if="success">
                    <p>{{ success }}</p>
                </div>
        <div>
            <p>Résultat : {{ formData }}</p>
            <fieldset>
                <label class="mdp_cmdp" for="username">Votre nom d'utilisateur :</label> 
                <InputText name="username" id="username" placeholder="johndoe" type="text" @inputChange="updateInputValue" /> 
            </fieldset>   
                
            <fieldset>  
                <label class="mdp_cmdp" for="email">Votre email :</label>
                <InputText name="email" id="email" placeholder="email@ojapon.com" type="text" @inputChange="updateInputValue" /> 
            </fieldset>
                
            <fieldset>
                <label class="mdp_cmdp" for="password">Votre mot de passe:</label>
                <InputText name="password" id="password" placeholder="******" type="password" @inputChange="updateInputValue" /> 
            </fieldset>
            <fieldset>
                <label class="mdp_cmdp" for="password_check">Confirmez votre mot de passe:</label>
                <InputText name="password_check" id="password_check" placeholder="*****" type="password" @inputChange="updateInputValue" /> 
            </fieldset>

            <Button v-on:click="sendForm" btnName="Créez un compte"/>
        </div>
        <div>
            <h2 class="titre-principal">Vous avez déjà un compte ?</h2>
            <router-link to="/login">
            <Button btnName="Se connecter"/>
            </router-link>
        </div>

    </div>
</section>
</template>

<script>
import InputText from '@/components/formulaire/InputText.vue';
import Button from '@/components/Button.vue';
import UsersService from '@/services/UsersService.js';

export default {
    name: "RegistrationForm",
    components: {
        InputText,
        Button,
    
    },
    data () {
        return {
            errors: [],
            success: null,
            formData: {
                email: null,
                username: null,
                password: null,
                password_check: null,
                role: "traveler"
            }
        }
    },
    methods: {
        updateInputValue: function (value) {
            this.formData[value.name] = value.value
        },
        sendForm() {
            //we start by emptying the error table (in the event of a second submit following an error, there is at least one element in it, and we want to avoid duplicate error messages)
            this.errors.length = 0;
            //retrieve all form data
                // we already have them in data...
            // validate this data
            if(!this.formData.email) {
                this.errors.push('Email cannot be empty');
            } else {
                // we check that it is a valid email
                const regex = new RegExp(/^[^\W][a-zA-Z0-9\-._]+[^\W]@[^\W][a-zA-Z0-9\-._]+[^\W]\.[a-zA-Z]{2,6}$/gm);
                if(!regex.test(this.formData.email)) {
                    this.errors.push('Email format is invalid');
                }
            }
            if(!this.formData.username) {
                this.errors.push('Username cannot be empty');
            }
            if(!this.formData.password || !this.formData.password_check) {
                this.errors.push('Password and Validate password cannot be empty');
            } else {
                if (this.formData.password != this.formData.password_check) {
                    this.errors.push('Passwords do not match');
                }
            }
            
            // return error messages in case of non-validation
            // run an asynchronous request to register a new user
            if (this.errors.length > 0) {
                console.log("Ça va pas du tout, fais ça correctement stp !");
                console.log(this.errors);
            } else {
                UsersService.register({
                    username: this.formData.username,
                    email: this.formData.email,
                    password: this.formData.password,
                    role: this.formData.role
                }, (data) => {
                    // I check the type of response and I display
                    // the message accordingly
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
    padding-bottom: 15em;
    
}

.titre-principal {
    text-align: left;
    color: black;
    padding-left: 3.5em;
    padding-top: 3.125em;
    margin-top: 2.188em;
    font-family: "Fellix SemiBold";
    font-size: 2.0em;
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
    margin-bottom: 10px;
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


.center-button {
    display: flex;
    flex-direction: column;
    align-items: center;
}
fieldset {
    border: 0;
    margin-bottom: 2em;
}



</style>




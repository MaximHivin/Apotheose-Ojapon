<template>
<section>
    <div class="main_container">
        <div class="titre-principal">
            <h1>Votre Point d'intérêt</h1>
        </div>
            <div class="errors" v-if="errors.length > 0">
                <p v-for="error in errors" :key="error">{{ error }}</p>
                </div>
                <div class="success" v-if="success">
                    <p>{{ success }}</p>
                </div>
        <div>
            <fieldset>
                <label class="mdp_cmdp" for="title">Nom :</label> 
                <InputText name="title" id="title" placeholder="Osaka" type="text" @inputChange="updateInputValue" /> 
            </fieldset> 
            <UploadFile @uploadComplete="getFileId"/>
            <fieldset>
                <label class="mdp_cmdp" for="title">Description :</label>
                <TextArea name="content" id="content" placeholder="Description du point d'intérêt : privilégiez une description objective, indépendante de votre expérience personnelle..." @inputChange="updateInputValue" /> 
            </fieldset>
            <div>
                <p>Localisation (plusieurs choix possibles)</p>
                <SearchAutocomplete :items="locations" @itemSelected="updateLocation"/>
                <div v-for="locSelected in locationsSelected" :key="locSelected">
                    <input type="checkbox" :id="locSelected.id" :name="locSelected.name" checked>
                    <label for="locSelected">{{ locSelected.name }}</label>
                </div>

            </div>
            <div>
                <p>Genres (plusieurs choix possibles)</p>
                <SearchAutocomplete :items="genres" @itemSelected="updateGenre"/>
                <div v-for="genreSelected in genresSelected" :key="genreSelected">
                    <input type="checkbox" :id="genreSelected.id" :name="genreSelected.name" checked>
                    <label for="genreSelected">{{ genreSelected.name }}</label>
                </div>

            </div>
            <Button v-on:click="sendForm" btnName="Créez votre Point d'intérêt"/>
        </div>


    </div>
</section>
</template>

<script>
import InputText from '@/components/formulaire/InputText.vue';
import TextArea from '@/components/formulaire/TextArea.vue';
import UploadFile from '@/components/formulaire/UploadFile.vue';
import Button from '@/components/Button.vue';
import SearchAutocomplete from '@/components/formulaire/SearchAutocomplete.vue';
import TaxonomiesService from '@/services/TaxonomiesService.js';
import POIService from '@/services/POIService.js';

export default {
    name: "PoiForm",
    components: {
        InputText,
        UploadFile,
        TextArea,
        Button,
        SearchAutocomplete
        
    },
    data () {
        return {
            errors: [],
            success: null,
            locations: [],
            genres: [],
            formData: {
                title: null,
                content: null,
                attachmentId: null
            },
            userID : this.$store.state.userID,
            locationsSelected: [],
            idLocationsSelected: [],
            genresSlected: [],
            idGenresSelected: [],
        }
    },
    mounted() {
        // call to API to get taxonomies
        // Attention, on ne traite pas pour l'instant les cas d'erreurs
        TaxonomiesService.getTerms('locations').then(
            // Executer le code qui permet de recuperer le résultat de ma requete
            // Permet de garder le contexte et de recuperer response
            (response) => {
                console.log(response.data);
                const localisations = response.data;
                for(const location of localisations) {
                    this.locations.push({
                        id: location.id,
                        name: location.name
                    } );
                    /* 
                    location.id.toString()*/
                }
                //this.locations = response.data;
            }
        );
        TaxonomiesService.getTerms('genres').then(
            // Executer le code qui permet de recuperer le résultat de ma requete
            // Permet de garder le contexte et de recuperer response
            (response) => {
                console.log(response.data);
                const genres = response.data;
                for(const genre of genres) {
                    this.genres.push({
                        id: genre.id,
                        name: genre.name
                    } );
                    /* 
                    location.id.toString()*/
                }
                //this.locations = response.data;
            }
        );
    },
    methods: {
        updateInputValue: function (value) {
            this.formData[value.name] = value.value
        },
        updateLocation: function (value) {
            console.log(value);
            this.locationsSelected.push(value);
            this.idLocationsSelected.push(value.id);
        },
        updateGenre: function (value) {
            console.log(value);
            this.genresSelected.push(value);
            this.idGenresSelected.push(value.id);
        },
        getFileId: function (value) {
            this.formData.attachmentId = value.fileId
        },
        sendForm() {
            //we start by emptying the error table (in the event of a second submit following an error, there is at least one element in it, and we want to avoid duplicate error messages)
            this.errors.length = 0;
            //retrieve all form data
                // we already have them in data...
            // validate this data
            if(!this.formData.title) {
                this.errors.push('Comment avez-vous dit que votre point d\'intérêt s\'appelait, déjà ?');
            } 
            if(!this.formData.content) {
                this.errors.push('Pensez à nous dire ce qui fait de cet endroit un endroit intéressant !');
            }
            if(!this.formData.attachmentId) {
                this.errors.push('Une image serait du plus bel effet, vous ne pensez pas ? :)');
            }
            
            // return error messages in case of non-validation
            // run an asynchronous request to register a new user
            if (this.errors.length > 0) {
                console.log("Ça va pas du tout, fais ça correctement stp !");
                console.log(this.errors);
            } else {
                // call to PoiServices
                POIService.add({
                    title: this.formData.title,
                    content: this.formData.content,
                    status: 'publish',
                    featured_media: this.formData.attachmentId,
                    author: this.userID,
                    locations: this.idLocationsSelected,
                    genres: this.idGenresSelected
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




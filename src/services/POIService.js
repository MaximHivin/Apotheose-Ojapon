import axios from 'axios';
import store from '../store/index.js';

const apiClient = axios.create({
    baseURL: 'http://ojapon.local/wp-json/wp/v2',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 10000
});

export default {
    findAll() {
        return apiClient.get('/poi?_embed');
    },
    add(data, callback) {
        let arrayToString = JSON.stringify(Object.assign({}, data));  // convert array to string
        //let stringToJsonObject = JSON.parse(arrayToString);  // convert string to json object
        console.log(arrayToString);
        apiClient.post('/poi', arrayToString, {
            headers: {
                'Authorization': 'Bearer ' + store.state.token
            }
        })
        .catch(
            (error) => {
                callback({
                    type: 'error',
                    message: error.response.data.message
                });
            }
        )
        .then(
            (response) => {
                callback({
                    type: 'success',
                    message: response.data.message
                });
            }
        );
    }
};
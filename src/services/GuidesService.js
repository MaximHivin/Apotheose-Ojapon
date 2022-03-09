import axios from 'axios';
import store from '../store/index.js'

const apiClient = axios.create({
    baseURL: 'http://ojapon.local/wp-json/wp/v2',
    headers: {
        Accept: 'application/json',
        'Authorization': 'Bearer' + store.state.token
    },
    timeout: 10000
})

export default {
    insert(data, callback){
        apiClient.post('/travelguide', data,)
        .then(
            (response) => {
                console.log('ICI', response);
                callback({
                    type:'success'
                });
            }
        )
    },

    findAll(){
        return apiClient.get('/travelguide?_embed')
    },

    delete(idGuide){
        return apiClient.delete('/travelguide/'+ idGuide)
    }
}

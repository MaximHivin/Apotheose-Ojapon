import axios from 'axios';
import store from '../store/index.js'

const apiClient = axios.create({
    baseURL: 'http://ojapon.local/wp-json/wp/v2',
    headers: {
        Accept: 'application/json',
        'Authorization': 'Bearer' + sessionStorage.getItem('token')
    },
    timeout: 10000
})

export default {
    insert(data, callback){
        apiClient.post('/travelguide', data, {
            headers: {
                'Authorization': 'Bearer' + store.state.token
            }
        })
        .then(
            (response) => {
                console.log('ICI', response);
                callback();
            }
        )
    }
}
import axios from 'axios';
// import { keys } from '../API/keys'

// let clientID = keys.client_ID
// console.log(client_ID)
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer '
    }
})
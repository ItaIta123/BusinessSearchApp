import axios from 'axios';
// import { keys } from '../API/keys'

// let clientID = keys.client_ID
// console.log(client_ID)
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer c181dKxVUrr0k3aJ52PYLhLS6G6ZiC2MGIxJuqbsMfu5KPbEPIvCC3GNwQMYj8v7-J1CCAjYIwcObTQFFO3MYENlD36OGilIjMgwExnjQCibw776Vkn337WtUZKtX3Yx'
    }
})
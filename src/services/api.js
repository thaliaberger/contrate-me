import axios from 'axios';

const api = axios.create({
    baseURL: 'https://contrate-me-api.herokuapp.com'
})

export default api;
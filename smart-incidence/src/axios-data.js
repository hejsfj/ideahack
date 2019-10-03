import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://smart-incidence.firebaseio.com/'
});

export default instance;
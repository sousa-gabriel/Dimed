import axios from 'axios';

const api = axios.create({
    baseURL:'http://10.50.10.186:9000/api/',
});

export default api;
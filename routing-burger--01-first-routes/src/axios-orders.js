import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-67102-default-rtdb.firebaseio.com/'
});

export default instance;
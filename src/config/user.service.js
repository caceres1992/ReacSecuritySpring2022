import axios from 'axios'
import authHeader from './auth-header'

const BASE_URL = "http://localhost:8080/api/users"


const getUsers = () => {
    return axios.get(BASE_URL,{header: authHeader()});
};

import axios from 'axios';

const BASE_URL = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
}) 


const loginApi = (username, password) => {
    return BASE_URL.post("/login", {username, password})
    .then(response => {
        if(response.status === 200) {
            console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
    })
    ;
}


const logout = () => {
    localStorage.removeItem('user');
}

const getCurrentUser = () => {
    return JSON.stringify(localStorage.getItem('user'));
}

export default{
    loginApi,
    logout,
    getCurrentUser
}
import axios from "axios";

const http = axios.create({
    baseURL: 'https://reqres.in/api/',
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
});

export default http;
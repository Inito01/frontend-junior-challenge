import axios from 'axios';


export const todoApiCall = axios.create({
    baseURL: 'https://my-json-server.typicode.com/AlvaroArratia/static-todos-api',
});
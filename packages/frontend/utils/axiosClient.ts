import axios from "axios";

export const axiosInstanceFront = axios.create({
    baseURL: 'http://localhost:3000/api',
});
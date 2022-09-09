    
import axios from "axios";

export const apiDoLogin = axios.create({
    baseURL: 'https://challenge.testing-room.com',
    method: 'POST',
    timeout: 1000
});
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 130f5c65e37f63ac0a45950c6eed26c4629ac9fd5e6b80c1dcf58e0e0dfe97d5'
    }    
});
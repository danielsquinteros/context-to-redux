import axios from 'axios';

const devfApi = axios.create({
    baseURL: "https://superheroapi.com/api.php/10223232565340348",
});


export { devfApi }

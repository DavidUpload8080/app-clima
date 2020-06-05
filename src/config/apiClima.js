import axios from 'axios';

const apiClima = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'    
    //http://api.openweathermap.org/data/2.5/weather?q=santiago,chile&appid=87c7749e53edb4694fbd4493c0bb5250
});

export default apiClima;
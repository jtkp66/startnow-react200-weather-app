import axios from 'axios';

const API_KEY = '34e93ebb37fd183cc885ec35940e2fc3';
//const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
//api.openweathermap.org/data/2.5/weather?q={city name}

export const FETCH_WEATHER = 'FETCH_WEATHER';//extract the variable and export it 

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url); 

    return {
        //unwraps the promise
        type: FETCH_WEATHER,
        payload: request //returning promise as the payload
    };
}
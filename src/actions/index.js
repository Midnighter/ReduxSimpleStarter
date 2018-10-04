import axios from 'axios';

const OPEN_WEATHERMAP_API_KEY = '0aeea8a5ee3d9a4c6a7d3722a095d82d';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHERMAP_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${API_URL}&q=${city},de`;
    // Create Promise and pass it in the payload to the reducer.
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
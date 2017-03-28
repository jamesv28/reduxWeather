const API_Key = "4694127c3ed57c34c8c1b877357f194a";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_Key}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
import axios from 'axios';

//  create an ajax request here in a little bit
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request', request);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

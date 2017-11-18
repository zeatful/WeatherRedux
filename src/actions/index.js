import axios from 'axios';

/*
  redux-promise is a middleware that hides the asynchronous code
    - pauses the action if the payload is a promise
    - waits for the promise to resolve
    - returns the request instead of the promise by attaching it to a new instance of the
    same action and a payload of the actual request, not the promise.
*/

const API_KEY = '23ecdf925600f2cc665b9bfd0b7f9efc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // hardcoded the country code to United States
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {type: FETCH_WEATHER, payload: request};
}
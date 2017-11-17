const API_KEY = '23ecdf925600f2cc665b9bfd0b7f9efc';
const ROOT_URL = `http://api.openweather.org/data/2.5/forceast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // hardcoded the country code to United States
  const url = `${ROOT_URL}&q=${city},us`;
  return {
    type: FETCH_WEATHER
  };
}
const API_KEY = '23ecdf925600f2cc665b9bfd0b7f9efc';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
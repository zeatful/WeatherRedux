import { FETCH_WEATHER } from "../actions/index";

// default to an empty array instead of null
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // only represents one city
      // can use concat or ES6 spread operator
      // always treat state as immuatable
      return [ action.payload.data, ...state ];
  }
  return state;
}
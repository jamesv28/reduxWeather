import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // try not to manipulate state - we create new arrays
      return [action.payload.data, ...state];  // new entries go to the top
  }

  return state;
}

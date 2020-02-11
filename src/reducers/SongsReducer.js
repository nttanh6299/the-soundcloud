import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
  fetching: false,
  items: [],
  nextUrl: ''
};

export default function songsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        fetching: false,
        items: [...new Set([...state.items, ...action.items])],
        nextUrl: action.nextUrl
      };
    default:
      return state;
  }
}

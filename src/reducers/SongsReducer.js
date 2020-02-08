import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
  fetching: false,
  songs: [],
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
        songs: action.songs,
        nextUrl: action.nextUrl
      };
    default:
      return { ...initialState };
  }
}

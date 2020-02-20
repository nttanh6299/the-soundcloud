import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_EMPTY
} from '../constants/ActionTypes';
import { removeDuplicateBy } from '../utils/helpers/removeDuplicateBy';

const initialState = {
  fetching: false,
  items: [],
  paramsUrl: {},
  page: 0,
  isOutOfItem: false
};

function playlist(state = initialState, action) {
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
        items: removeDuplicateBy([...state.items, ...action.items], 'id'),
        paramsUrl: action.paramsUrl,
        page: action.page
      };
    case FETCH_SONGS_EMPTY:
      return {
        ...state,
        isOutOfItem: true,
        fetching: false
      };
    default:
      return state;
  }
}

export default function playlistsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
    case FETCH_SONGS_SUCCESS:
    case FETCH_SONGS_EMPTY:
      return {
        ...state,
        [action.key]: playlist(state[action.key], action)
      };
    default:
      return state;
  }
}

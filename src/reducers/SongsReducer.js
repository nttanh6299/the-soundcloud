import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS
} from '../constants/ActionTypes';
import { removeDuplicateBy } from '../utils/helpers/removeDuplicateBy';

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
        items: removeDuplicateBy([...state.items, ...action.items], 'id'),
        nextUrl: action.nextUrl
      };
    default:
      return state;
  }
}

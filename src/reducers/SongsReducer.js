import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  PLAY_SONG,
  PAUSE_SONG
} from '../constants/ActionTypes';

const initialState = {
  fetching: false,
  songs: [],
  nextUrl: '',
  playingSongId: null,
  isPlaying: false
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
        songs: [...new Set([...state.songs, ...action.songs])],
        nextUrl: action.nextUrl
      };
    case PLAY_SONG:
      return {
        ...state,
        playingSongId: action.songId,
        isPlaying: true
      };
    case PAUSE_SONG:
      return {
        ...state,
        isPlaying: false
      };
    default:
      return { ...initialState };
  }
}

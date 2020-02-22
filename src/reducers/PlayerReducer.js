import {
  PLAY_SONG,
  ON_PLAY,
  ON_PAUSE,
  ON_TOGGLE_REPEAT,
  ON_TOGGLE_SHUFFLE,
  ON_LOAD_START,
  ON_LOADED_METADATA,
  ON_TIME_UPDATE,
  ON_VOLUME_CHANGE
} from '../constants/ActionTypes';

const initialState = {
  currentPlayingTime: 0,
  duration: 0,
  isPlaying: false,
  playingSongIndex: -1,
  muted: false,
  volume: 1,
  repeat: false,
  shuffle: false,
  playlist: ''
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        playingSongIndex: action.songIndex,
        playlist: action.playlist,
        isPlaying: true
      };
    case ON_LOAD_START:
      return {
        ...state,
        currentPlayingTime: 0,
        duration: 0
      };
    case ON_LOADED_METADATA:
      return {
        ...state,
        duration: action.duration
      };
    case ON_PLAY:
      return {
        ...state,
        isPlaying: true
      };
    case ON_PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    case ON_TOGGLE_REPEAT:
      return {
        ...state,
        repeat: !state.repeat
      };
    case ON_TOGGLE_SHUFFLE:
      return {
        ...state,
        shuffle: !state.shuffle
      };
    case ON_TIME_UPDATE:
      return {
        ...state,
        currentPlayingTime: action.currentTime
      };
    case ON_VOLUME_CHANGE:
      return {
        ...state,
        volume: action.volume,
        muted: action.muted
      };
    default:
      return state;
  }
}

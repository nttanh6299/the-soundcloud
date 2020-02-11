import { PLAY_SONG, ON_PLAY, ON_PAUSE } from '../constants/ActionTypes';

const initialState = {
  currentTimePlaying: 0,
  isPlaying: false,
  playingSongIndex: -1,
  muted: false,
  volume: 0,
  repeat: false,
  shuffle: false
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        playingSongIndex: action.songIndex,
        isPlaying: true
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
    default:
      return state;
  }
}

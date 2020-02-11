import {
  PLAY_SONG,
  ON_PLAY,
  ON_PAUSE,
  ON_TOGGLE_SHUFFLE,
  ON_TOGGLE_REPEAT
} from '../constants/ActionTypes';

export const playSong = songIndex => ({ type: PLAY_SONG, songIndex });

export const onPlay = () => ({ type: ON_PLAY });

export const onPause = () => ({ type: ON_PAUSE });

export const onToggleShuffle = () => ({ type: ON_TOGGLE_SHUFFLE });

export const onToggleRepeat = () => ({ type: ON_TOGGLE_REPEAT });

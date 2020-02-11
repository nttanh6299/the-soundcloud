import {
  PLAY_SONG,
  ON_PLAY,
  ON_PAUSE,
  ON_TOGGLE_SHUFFLE,
  ON_TOGGLE_REPEAT,
  ON_LOAD_START,
  ON_LOADED_METADATA,
  ON_TIME_UPDATE
} from '../constants/ActionTypes';

export const playSong = songIndex => ({ type: PLAY_SONG, songIndex });

export const onPlay = () => ({ type: ON_PLAY });

export const onPause = () => ({ type: ON_PAUSE });

export const onToggleShuffle = () => ({ type: ON_TOGGLE_SHUFFLE });

export const onToggleRepeat = () => ({ type: ON_TOGGLE_REPEAT });

export const onLoadStart = () => ({ type: ON_LOAD_START });

export const onLoadedMetadata = duration => ({
  type: ON_LOADED_METADATA,
  duration
});

export const onTimeUpdate = currentTime => ({
  type: ON_TIME_UPDATE,
  currentTime
});

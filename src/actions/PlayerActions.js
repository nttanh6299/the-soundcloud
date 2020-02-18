import {
  PLAY_SONG,
  ON_PLAY,
  ON_PAUSE,
  ON_TOGGLE_SHUFFLE,
  ON_TOGGLE_REPEAT,
  ON_LOAD_START,
  ON_LOADED_METADATA,
  ON_TIME_UPDATE,
  ON_VOLUME_CHANGE
} from '../constants/ActionTypes';
import {
  getNextIndex,
  getPrevIndex,
  getRandomIndex
} from '../selectors/PlayerSelector';
import {
  getShuffle,
  getRepeat,
  getPlayingSongIndex,
  getPlaylistPlaying
} from '../selectors/CommonSelectors';

export const playSong = (playlist, songIndex) => ({
  type: PLAY_SONG,
  playlist,
  songIndex
});

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

export const onVolumeChange = (volume, muted) => ({
  type: ON_VOLUME_CHANGE,
  volume,
  muted
});

export const playNextSong = (nextWhileKeepRepeat = false) => (
  dispatch,
  getState
) => {
  const state = getState();
  const shuffle = getShuffle(state);
  const repeat = getRepeat(state);
  const playlistPlaying = getPlaylistPlaying(state);

  if (repeat && !nextWhileKeepRepeat) {
    const currentIndex = getPlayingSongIndex(state);
    dispatch(playSong(playlistPlaying, currentIndex));
  } else if (shuffle && !repeat) {
    const randomIndex = getRandomIndex(state);
    dispatch(playSong(playlistPlaying, randomIndex));
  } else {
    const nextIndex = getNextIndex(state);
    dispatch(playSong(playlistPlaying, nextIndex));
  }
};

export const playPrevSong = () => (dispatch, getState) => {
  const state = getState();
  const playlistPlaying = getPlaylistPlaying(state);
  const prevIndex = getPrevIndex(state);
  if (prevIndex !== null) {
    dispatch(playSong(playlistPlaying, prevIndex));
  }
};

export const playNextSongWhileKeepRepeat = () => dispatch => {
  dispatch(playNextSong(true));
};

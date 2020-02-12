import { createSelector } from 'reselect';
import { TOKEN_API } from '../constants/urlApi';
import {
  getSongList,
  getPlayingSongIndex,
  getSongItemLength
} from './CommonSelectors';

export const getSong = createSelector(
  getSongList,
  getPlayingSongIndex,
  (songs, index) => songs[index]
);

export const getAudioUrl = createSelector(getSong, song =>
  song ? `${song.streamUrl}?client_id=${TOKEN_API}` : ''
);

export const getNextIndex = createSelector(
  getSongItemLength,
  getPlayingSongIndex,
  (length, index) => (index === length - 1 ? 0 : index + 1)
);

export const getPrevIndex = createSelector(getPlayingSongIndex, index =>
  index === 0 ? null : index - 1
);

export const getRandomIndex = createSelector(
  getSongItemLength,
  getPlayingSongIndex,
  (length, index) => {
    let newIndex = 0;
    if (length === 1) {
      return newIndex;
    }

    newIndex = Math.floor(Math.random() * (length - 1));
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * (length - 1));
    }

    return newIndex;
  }
);

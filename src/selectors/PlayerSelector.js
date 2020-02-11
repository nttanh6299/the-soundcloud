import { createSelector } from 'reselect';
import { TOKEN_API } from '../constants/urlApi';
import { getSongList, getPlayingSongIndex } from './CommonSelectors';

export const getSong = createSelector(
  getSongList,
  getPlayingSongIndex,
  (songs, index) => songs[index]
);

export const getAudioUrl = createSelector(getSong, song =>
  song ? `${song.streamUrl}?client_id=${TOKEN_API}` : ''
);

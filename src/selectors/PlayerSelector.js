import { createSelector } from 'reselect';
import { TOKEN_API } from '../constants/urlApi';
import {
  getPlaylistPlaying,
  getPlayingSongIndex,
  getPlaylistItemsLength,
  getPlaylists
} from './CommonSelectors';

export const getSong = createSelector(
  getPlaylists,
  getPlaylistPlaying,
  getPlayingSongIndex,
  (playlists, playlistPlaying, index) => {
    const playlist = playlists[playlistPlaying];
    return playlist ? playlist.items[index] : null;
  }
);

export const getAudioUrl = createSelector(getSong, song =>
  song ? `${song.streamUrl}?client_id=${TOKEN_API}` : ''
);

export const getNextIndex = createSelector(
  getPlaylistItemsLength,
  getPlayingSongIndex,
  (length, index) => (index === length - 1 ? 0 : index + 1)
);

export const getPrevIndex = createSelector(getPlayingSongIndex, index =>
  index === 0 ? null : index - 1
);

export const getRandomIndex = createSelector(
  getPlaylistItemsLength,
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

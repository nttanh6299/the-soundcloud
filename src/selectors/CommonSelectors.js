import { createSelector } from 'reselect';

//songs
export const getSongList = state => state.songs.items;
export const getSongItemLength = createSelector(getSongList, songs =>
  songs ? songs.length : 0
);

//player
export const getIsPlaying = state => state.player.isPlaying;
export const getPlayingSongIndex = state => state.player.playingSongIndex;
export const getShuffle = state => state.player.shuffle;
export const getRepeat = state => state.player.repeat;

//common
export const getPlayingSongId = createSelector(
  getSongList,
  getPlayingSongIndex,
  (songs, index) => {
    if (songs.length > 0 && index >= 0) {
      return songs[index].id;
    }
    return -1;
  }
);

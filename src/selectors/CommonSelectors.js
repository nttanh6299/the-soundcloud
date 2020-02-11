import { createSelector } from 'reselect';

//songs
export const getSongList = state => state.songs.items;

//player
export const getIsPlaying = state => state.player.isPlaying;
export const getPlayingSongIndex = state => state.player.playingSongIndex;

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

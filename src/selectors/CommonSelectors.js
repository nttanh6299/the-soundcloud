import { createSelector } from 'reselect';

//nav
export const getCurrentQuery = state => state.nav.search.currentQuery;

//songs
export const getPlaylists = state => state.playlists;
export const getPlaylist = createSelector(
  getPlaylists,
  getCurrentQuery,
  (playlists, key) => {
    const playlist = playlists[key];
    return {
      fetching: playlist ? playlist.fetching : false,
      items: playlist ? playlist.items : [],
      paramsUrl: playlist ? playlist.paramsUrl : {},
      page: playlist ? playlist.page : 0
    };
  }
);
export const getFetching = createSelector(
  getPlaylist,
  playlist => playlist.fetching
);

//player
export const getIsPlaying = state => state.player.isPlaying;
export const getPlayingSongIndex = state => state.player.playingSongIndex;
export const getShuffle = state => state.player.shuffle;
export const getRepeat = state => state.player.repeat;
export const getPlaylistPlaying = state => state.player.playlist;

//common
export const getPlayingSongId = createSelector(
  getPlaylists,
  getPlaylistPlaying,
  getPlayingSongIndex,
  (playlists, playlistPlaying, index) => {
    const playlist = playlists[playlistPlaying];
    if (playlist && playlist.items.length > 0 && index >= 0) {
      return playlist.items[index].id;
    }
    return null;
  }
);

export const getPlaylistItemsLength = createSelector(
  getPlaylists,
  getPlaylistPlaying,
  (playlists, playlistPlaying) => {
    return playlists.hasOwnProperty(playlistPlaying)
      ? playlists[playlistPlaying].items.length
      : 0;
  }
);

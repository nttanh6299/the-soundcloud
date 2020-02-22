import { createSelector } from 'reselect';
import { getPlaylists } from './CommonSelectors';
import { HISTORY_PLAYLIST } from '../constants/GlobalConstants';

export const getHistorySongs = createSelector(getPlaylists, playlists =>
  playlists.hasOwnProperty(HISTORY_PLAYLIST)
    ? playlists[HISTORY_PLAYLIST].items
    : []
);

import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS
} from '../constants/ActionTypes';
import { fetchApi } from '../utils/apiCaller';
import { getPlaylists } from '../selectors/CommonSelectors';
import { SONG_LIMIT } from '../constants/GlobalConstants';

const fetchSongsRequest = key => ({ type: FETCH_SONGS_REQUEST, key });

const fetchSongsSuccess = (key, items, paramsUrl, page) => ({
  type: FETCH_SONGS_SUCCESS,
  key,
  items,
  paramsUrl,
  page
});

export const fetchSongs = (
  playlist,
  page,
  paramsUrl = null
) => async dispatch => {
  try {
    const params = Object.assign({}, paramsUrl, {
      offset: (page - 1) * SONG_LIMIT,
      limit: SONG_LIMIT
    });

    dispatch(fetchSongsRequest(playlist));

    //no linked partitioning
    const response = await fetchApi('/tracks', 'GET', null, params);

    dispatch(fetchSongsSuccess(playlist, response, paramsUrl, page));
  } catch (err) {
    console.log(err);
  }
};

export const fetchSongsIfNeeded = (playlist, paramsUrl) => (
  dispatch,
  getState
) => {
  const state = getState();
  const playlists = getPlaylists(state);
  const playlistExists = playlists.hasOwnProperty(playlist);
  const playlistHasItems = playlistExists
    ? playlists[playlist].items.length > 0
    : false;
  const playlistIsFetching = playlistExists
    ? playlists[playlist].fetching
    : false;
  if (!playlistExists || (!playlistHasItems && !playlistIsFetching)) {
    dispatch(fetchSongs(playlist, 1, paramsUrl));
  }
};

export const fetchSongsNext = (playlist, page, paramsUrl) => (
  dispatch,
  getState
) => {
  const state = getState();
  const playlists = getPlaylists(state);
  const playlistExists = playlists.hasOwnProperty(playlist);
  const playlistIsFetching = playlistExists
    ? playlists[playlist].fetching
    : false;
  if (!playlistIsFetching) {
    dispatch(fetchSongs(playlist, page, paramsUrl));
  }
};

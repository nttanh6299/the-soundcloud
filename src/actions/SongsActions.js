import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_EMPTY
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

const fetchSongsEmpty = key => ({ type: FETCH_SONGS_EMPTY, key });

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

    if (response.length > 0) {
      dispatch(fetchSongsSuccess(playlist, response, paramsUrl, page));
    } else {
      dispatch(fetchSongsEmpty(playlist));
    }
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
  const isOutOfItem = playlistExists ? playlists[playlist].isOutOfItem : true;

  if (!playlistIsFetching && !isOutOfItem) {
    dispatch(fetchSongs(playlist, page, paramsUrl));
  }
};

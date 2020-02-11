import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS
} from '../constants/ActionTypes';
import { fetchApi } from '../utils/apiCaller';

const fetchSongsRequest = () => ({ type: FETCH_SONGS_REQUEST });

const fetchSongsSuccess = (items, nextUrl) => ({
  type: FETCH_SONGS_SUCCESS,
  items,
  nextUrl
});

export const fetchSongs = (url, params = null) => async dispatch => {
  try {
    dispatch(fetchSongsRequest());
    const response = await fetchApi(url, 'GET', null, params);

    dispatch(fetchSongsSuccess(response.collection, response.nextHref));
  } catch (err) {
    console.log(err);
  }
};

export const fetchSongsNext = url => (dispatch, getState) => {
  const state = getState();
  const fetching = state.songs.fetching;

  if (!fetching) {
    dispatch(fetchSongs(url));
  }
};

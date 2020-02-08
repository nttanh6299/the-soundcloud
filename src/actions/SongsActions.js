import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS
} from '../constants/ActionTypes';
import { fetchApi } from '../utils/apiCaller';
import { TOKEN_API } from '../constants/urlApi';

const fetchSongsRequest = () => ({ type: FETCH_SONGS_REQUEST });

const fetchSongsSuccess = (songs, nextUrl) => ({
  type: FETCH_SONGS_SUCCESS,
  songs,
  nextUrl
});

export const fetchSongs = () => async dispatch => {
  try {
    dispatch(fetchSongsRequest());
    const response = await fetchApi('/tracks', 'GET', null, {
      client_id: TOKEN_API,
      tags: 'house',
      linked_partitioning: 1,
      limit: 25,
      offset: 0
    });

    dispatch(fetchSongsSuccess(response.collection, response.nextHref));
  } catch (err) {}
};

import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS
} from '../constants/ActionTypes';
import { fetchApi } from '../utils/apiCaller';
import { getFetching } from '../selectors/CommonSelectors';
import { SONG_LIMIT } from '../constants/GlobalConstants';

const fetchSongsRequest = () => ({ type: FETCH_SONGS_REQUEST });

const fetchSongsSuccess = (items, paramsUrl, page) => ({
  type: FETCH_SONGS_SUCCESS,
  items,
  paramsUrl,
  page
});

export const fetchSongs = (page = 1, paramsUrl = null) => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    const fetching = getFetching(state);
    if (!fetching) {
      const params = Object.assign({}, paramsUrl, {
        offset: (page - 1) * SONG_LIMIT,
        limit: SONG_LIMIT
      });

      dispatch(fetchSongsRequest());

      const response = await fetchApi('/tracks', 'GET', null, params);

      dispatch(fetchSongsSuccess(response, paramsUrl, page));
    }
  } catch (err) {
    console.log(err);
  }
};

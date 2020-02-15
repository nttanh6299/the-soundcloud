import { ON_SONGS_SEARCH } from '../constants/ActionTypes';

export const onSongsSearch = query => ({
  type: ON_SONGS_SEARCH,
  querySearch: query
});

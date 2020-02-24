import { ON_SONGS_SEARCH } from '../constants/ActionTypes';
import { GENRES } from '../constants/GlobalConstants';

const initialState = {
  search: {
    currentQuery: GENRES.house || 'house',
    querySearchs: [GENRES.house || 'house']
  }
};

export default function navReducer(state = initialState, action) {
  switch (action.type) {
    case ON_SONGS_SEARCH:
      return {
        ...state,
        search: {
          ...state.search,
          currentQuery: action.querySearch,
          querySearchs: [
            ...state.search.querySearchs.filter(
              query => query !== action.querySearch
            ),
            action.querySearch
          ]
        }
      };
    default:
      return state;
  }
}

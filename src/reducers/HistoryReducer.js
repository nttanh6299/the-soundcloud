import { ON_TOGGLE_SHOW_HISTORY, PLAY_SONG } from '../constants/ActionTypes';

const initialState = {
  showHistory: false
  //playlists: []
};

function historyReducer(state = initialState, action) {
  switch (action.type) {
    case ON_TOGGLE_SHOW_HISTORY:
      return {
        ...state,
        showHistory: !state.showHistory
      };
    // case PLAY_SONG:
    //   return {
    //     ...state,
    //     playlists: [
    //       ...state.playlists,
    //       { playlist: action.playlist, songIndex: action.songIndex }
    //     ]
    //   };
    default:
      return state;
  }
}

export default historyReducer;

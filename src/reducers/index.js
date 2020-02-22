import { combineReducers } from 'redux';
import playlistsReducer from './PlaylistsReducer';
import playerReducer from './PlayerReducer';
import navReducer from './NavReducer';
import historyReducer from './HistoryReducer';

export default combineReducers({
  playlists: playlistsReducer,
  player: playerReducer,
  nav: navReducer,
  history: historyReducer
});

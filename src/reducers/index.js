import { combineReducers } from 'redux';
import songsReducer from './SongsReducer';
import playerReducer from './PlayerReducer';

export default combineReducers({
  songs: songsReducer,
  player: playerReducer
});

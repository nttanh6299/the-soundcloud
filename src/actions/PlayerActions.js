import { PLAY_SONG, ON_PLAY, ON_PAUSE } from '../constants/ActionTypes';

export const playSong = songIndex => ({ type: PLAY_SONG, songIndex });

export const onPlay = () => ({ type: ON_PLAY });

export const onPause = () => ({ type: ON_PAUSE });

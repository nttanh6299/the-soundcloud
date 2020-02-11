import React from 'react';
import { connect } from 'react-redux';
import Songs from '../components/songs';
import {
  getSongs,
  getPlayingSongId,
  getIsPlaying
} from '../selectors/CommonSelectors';
import { fetchSongs, fetchSongsNext } from '../actions/SongsActions';
import { playSong } from '../actions/PlayerActions';

const SongsContainer = props => <Songs {...props} />;

const mapStateToProps = state => {
  return {
    ...getSongs(state),
    playingSongId: getPlayingSongId(state),
    isPlaying: getIsPlaying(state)
  };
};

export default connect(mapStateToProps, {
  fetchSongs,
  fetchSongsNext,
  playSong
})(SongsContainer);

import React from 'react';
import { connect } from 'react-redux';
import Songs from '../components/songs';
import {
  getPlayingSongId,
  getIsPlaying,
  getPlaylist,
  getCurrentQuery
} from '../selectors/CommonSelectors';
import { fetchSongsIfNeeded, fetchSongsNext } from '../actions/SongsActions';
import { playSong } from '../actions/PlayerActions';

const SongsContainer = props => <Songs {...props} />;

const mapStateToProps = state => {
  return {
    ...getPlaylist(state),
    playingSongId: getPlayingSongId(state),
    isPlaying: getIsPlaying(state),
    currentPlaylist: getCurrentQuery(state)
  };
};

export default connect(mapStateToProps, {
  fetchSongsIfNeeded,
  fetchSongsNext,
  playSong
})(SongsContainer);

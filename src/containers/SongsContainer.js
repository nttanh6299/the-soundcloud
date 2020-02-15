import React from 'react';
import { connect } from 'react-redux';
import Songs from '../components/songs';
import { getPlayingSongId, getIsPlaying } from '../selectors/CommonSelectors';
import { fetchSongs } from '../actions/SongsActions';
import { playSong } from '../actions/PlayerActions';

const SongsContainer = props => <Songs {...props} />;

const mapStateToProps = state => {
  const { songs } = state;

  return {
    ...songs,
    playingSongId: getPlayingSongId(state),
    isPlaying: getIsPlaying(state)
  };
};

export default connect(mapStateToProps, {
  fetchSongs,
  playSong
})(SongsContainer);

import React from 'react';
import { connect } from 'react-redux';
import Player from '../components/player';
import { getAudioUrl, getSong } from '../selectors/PlayerSelector';
import { onPlay, onPause } from '../actions/PlayerActions';

const PlayerContainer = props => <Player {...props} />;

const mapStateToProps = state => {
  const { player } = state;

  return {
    player,
    audioUrl: getAudioUrl(state),
    song: getSong(state)
  };
};

export default connect(mapStateToProps, {
  onPlay,
  onPause
})(PlayerContainer);

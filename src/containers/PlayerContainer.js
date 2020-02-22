import React from 'react';
import { connect } from 'react-redux';
import Player from '../components/player';
import { getAudioUrl, getSong } from '../selectors/PlayerSelector';
import {
  onPlay,
  onPause,
  onToggleRepeat,
  onToggleShuffle,
  onLoadStart,
  onLoadedMetadata,
  onTimeUpdate,
  onVolumeChange,
  playNextSong,
  playPrevSong,
  playNextSongWhileKeepRepeat
} from '../actions/PlayerActions';
import { onToggleShowHistory } from '../actions/HistoryActions';

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
  onPause,
  onToggleRepeat,
  onToggleShuffle,
  onLoadStart,
  onLoadedMetadata,
  onTimeUpdate,
  onVolumeChange,
  playNextSong,
  playPrevSong,
  playNextSongWhileKeepRepeat,
  onToggleShowHistory
})(PlayerContainer);

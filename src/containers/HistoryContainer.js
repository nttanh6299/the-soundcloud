import React from 'react';
import { connect } from 'react-redux';
import History from '../components/history';
import { onToggleShowHistory } from '../actions/HistoryActions';
import { playSong } from '../actions/PlayerActions';
import { getHistorySongs } from '../selectors/HistorySelectors';
import { getPlayingSongId, getIsPlaying } from '../selectors/CommonSelectors';
import { HISTORY_PLAYLIST } from '../constants/GlobalConstants';

const HistoryContainer = props => <History {...props} />;

const mapStateToProps = state => {
  const { history } = state;

  return {
    ...history,
    playlist: HISTORY_PLAYLIST,
    playingSongId: getPlayingSongId(state),
    isPlaying: getIsPlaying(state),
    songs: getHistorySongs(state)
  };
};

export default connect(mapStateToProps, { onToggleShowHistory, playSong })(
  HistoryContainer
);

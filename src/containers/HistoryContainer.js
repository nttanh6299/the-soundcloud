import React from 'react';
import { connect } from 'react-redux';
import History from '../components/history';
import { onToggleShowHistory } from '../actions/HistoryActions';

const HistoryContainer = props => <History {...props} />;

const mapStateToProps = state => {
  const { history } = state;

  return {
    ...history
  };
};

export default connect(mapStateToProps, { onToggleShowHistory })(
  HistoryContainer
);

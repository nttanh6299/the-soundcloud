import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  showHistory: PropTypes.bool.isRequired,
  onToggleShowHistory: PropTypes.func.isRequired
};

const History = ({ showHistory, onToggleShowHistory }) => {
  if (!showHistory) {
    return null;
  }

  return (
    <div className="history">
      <div
        className="history__overlay"
        onClick={onToggleShowHistory}
        role="button"
      ></div>
      <div className="history__main">
        <div className="history__header">
          <div className="history__header__title">Recently Played</div>
          <div
            className="history__header__close"
            onClick={onToggleShowHistory}
            role="button"
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="history__songs"></div>
      </div>
    </div>
  );
};

History.propTypes = propTypes;

export default History;

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  loading: PropTypes.bool.isRequired
};

const Loader = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className="loader">
      <div className="loader__rect loader__rect--1"></div>
      <div className="loader__rect loader__rect--2"></div>
      <div className="loader__rect loader__rect--3"></div>
      <div className="loader__rect loader__rect--4"></div>
      <div className="loader__rect loader__rect--5"></div>
      <div className="loader__rect loader__rect--6"></div>
    </div>
  );
};

Loader.propTypes = propTypes;

export default Loader;

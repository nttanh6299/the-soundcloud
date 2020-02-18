import React from 'react';
import PropTypes from 'prop-types';
import { KEY_CODES } from '../constants/GlobalConstants';

const propTypes = {
  currentQuery: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};

function NavSearch({ currentQuery, onSearch }) {
  function onKeyPress(e) {
    const code = e.which || e.keyCode;
    if (code === KEY_CODES.ENTER) {
      const value = e.currentTarget.value.trim();
      if (value !== '' && currentQuery !== value) {
        window.scrollTo(0, 0);
        onSearch(value);
      }
    }
  }

  return (
    <div className="nav-search">
      <i className="nav-search__icon fas fa-search"></i>
      <input
        onKeyPress={onKeyPress}
        className="nav-search__input"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

NavSearch.propTypes = propTypes;

export default NavSearch;

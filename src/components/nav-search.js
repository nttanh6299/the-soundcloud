import React from 'react';
import PropTypes from 'prop-types';
import { KEY_CODES } from '../constants/GlobalConstants';

const propTypes = {
  onSearch: PropTypes.func.isRequired
};

const NavSearch = ({ songs, onSearch, fetchSongs }) => {
  function onKeyPress(e) {
    const code = e.which || e.keyCode;
    if (code === KEY_CODES.ENTER) {
      const value = e.currentTarget.value.trim();
      if (value !== '') {
        const { paramsUrl } = songs;
        const params = { ...paramsUrl, q: value };
        onSearch(value);
        fetchSongs(1, params);
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
};

NavSearch.propTypes = propTypes;

export default NavSearch;

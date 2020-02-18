import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavSearch from './nav-search';

const propTypes = {
  nav: PropTypes.shape({}),
  onSongsSearch: PropTypes.func.isRequired
};

const Nav = ({ nav, onSongsSearch }) => {
  const { search } = nav;
  const { currentQuery } = search;

  return (
    <nav className="nav">
      <div className="nav__inner container">
        <div className="nav__section">
          <i className="nav__logo__icon fab fa-soundcloud"></i>
          <Link className="nav__logo__text" to="/">
            The SoundCloud
          </Link>
        </div>
        <div className="nav__section">
          <NavSearch currentQuery={currentQuery} onSearch={onSongsSearch} />
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = propTypes;

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

import NavSearch from './nav-search';

const Nav = () => {
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
          <NavSearch />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

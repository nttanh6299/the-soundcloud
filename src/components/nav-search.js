import React from 'react';

const NavSearch = () => {
  return (
    <div className="nav-search">
      <i className="nav-search__icon fas fa-search"></i>
      <input className="nav-search__input" type="text" placeholder="Search" />
    </div>
  );
};

export default NavSearch;

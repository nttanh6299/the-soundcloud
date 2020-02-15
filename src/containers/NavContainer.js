import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/nav';
import { onSongsSearch } from '../actions/NavActions';
import { fetchSongs } from '../actions/SongsActions';

const NavContainer = props => <Nav {...props} />;

const mapDispatchToProps = state => {
  const { songs, nav } = state;
  return {
    nav,
    songs
  };
};

export default connect(mapDispatchToProps, { onSongsSearch, fetchSongs })(
  NavContainer
);

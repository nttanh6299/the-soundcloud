import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/nav';
import { onSongsSearch } from '../actions/NavActions';

const NavContainer = props => <Nav {...props} />;

const mapDispatchToProps = state => {
  const { nav } = state;
  return { ...nav };
};

export default connect(mapDispatchToProps, { onSongsSearch })(NavContainer);

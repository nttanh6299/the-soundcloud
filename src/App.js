import React, { Component } from 'react';
import Nav from './components/nav.js';
import Songs from './components/songs';

import { fetchSongs } from './actions/SongsActions';

import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const { temp } = this.props;
    const { songs, fetching } = temp;

    return (
      <div>
        <Nav />
        {/* <ul>
        {state.collection &&
          state.collection.map((s, index) => <li key={index}>{s.id}</li>)}
      </ul> */}
        <Songs songs={songs} loading={fetching} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    temp: state.songs
  };
};

export default connect(mapStateToProps, { fetchSongs })(App);

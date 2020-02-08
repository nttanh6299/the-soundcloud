import React, { Component } from 'react';
import Nav from './components/nav.js';
import Songs from './components/songs';

import { fetchSongs } from './actions/SongsActions';
import { TOKEN_API } from './constants/urlApi';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    const params = {
      client_id: TOKEN_API,
      tags: 'house',
      linked_partitioning: 1,
      limit: 25,
      offset: 0
    };
    this.props.fetchSongs('/tracks', params);
  }

  render() {
    const { temp } = this.props;
    const { songs, fetching } = temp;

    return (
      <div>
        <Nav />
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

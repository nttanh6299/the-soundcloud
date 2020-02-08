import React, { Component } from 'react';
import Nav from './components/nav.js';
import Songs from './components/songs';

import { fetchSongs, fetchSongsNext } from './actions/SongsActions';
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
    const { temp, fetchSongsNext } = this.props;
    const { songs, fetching, nextUrl } = temp;

    return (
      <div>
        <Nav />
        <Songs
          nextUrl={nextUrl}
          songs={songs}
          loading={fetching}
          fetchSongsNext={fetchSongsNext}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    temp: state.songs
  };
};

export default connect(mapStateToProps, { fetchSongs, fetchSongsNext })(App);

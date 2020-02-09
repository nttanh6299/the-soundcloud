import React, { Component } from 'react';
import Nav from './components/nav.js';
import Songs from './components/songs';

import {
  fetchSongs,
  fetchSongsNext,
  playSong,
  pauseSong
} from './actions/SongsActions';
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
    const { temp, fetchSongsNext, playSong, pauseSong } = this.props;
    const { songs, fetching, nextUrl, playingSongId, isPlaying } = temp;

    return (
      <div>
        <Nav />
        <Songs
          nextUrl={nextUrl}
          songs={songs}
          loading={fetching}
          fetchSongsNext={fetchSongsNext}
          playingSongId={playingSongId}
          playSong={playSong}
          pauseSong={pauseSong}
          isPlaying={isPlaying}
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

export default connect(mapStateToProps, {
  fetchSongs,
  fetchSongsNext,
  playSong,
  pauseSong
})(App);

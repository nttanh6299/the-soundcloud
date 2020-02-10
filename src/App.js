import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './components/nav.js';
import Songs from './components/songs';
import Player from './components/player';

import {
  fetchSongs,
  fetchSongsNext,
  playSong,
  pauseSong
} from './actions/SongsActions';
import { TOKEN_API } from './constants/urlApi';
import { connect } from 'react-redux';

const propTypes = {
  fetchSongs: PropTypes.func.isRequired,
  fetchSongsNext: PropTypes.func.isRequired,
  playSong: PropTypes.func.isRequired,
  pauseSong: PropTypes.func.isRequired,
  songsData: PropTypes.shape({}).isRequired
};

class App extends Component {
  componentDidMount() {
    const { fetchSongs } = this.props;
    const params = {
      client_id: TOKEN_API,
      tags: 'house',
      linked_partitioning: 1,
      limit: 25,
      offset: 0
    };
    fetchSongs('/tracks', params);
  }

  render() {
    const { songsData, fetchSongsNext, playSong, pauseSong } = this.props;
    const { songs, fetching, nextUrl, playingSongId, isPlaying } = songsData;

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
        <Player song={songs} />
      </div>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    songsData: state.songs
  };
};

export default connect(mapStateToProps, {
  fetchSongs,
  fetchSongsNext,
  playSong,
  pauseSong
})(App);

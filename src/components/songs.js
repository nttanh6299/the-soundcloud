import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './loader';
import SongsRendered from './songs-rendered';
import InfiniteScroll from './infinite-scroll';
import { TOKEN_API } from '../constants/urlApi';

const propTypes = {
  nextUrl: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  fetching: PropTypes.bool.isRequired,
  fetchSongsNext: PropTypes.func.isRequired,
  playingSongId: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  playSong: PropTypes.func.isRequired,
  fetchSongs: PropTypes.func.isRequired
};

class Songs extends Component {
  componentDidMount() {
    const { fetchSongs } = this.props;
    const params = {
      client_id: TOKEN_API,
      linked_partitioning: 1,
      tags: 'house',
      limit: 50,
      offset: 0
    };
    fetchSongs('/tracks', params);
  }

  render() {
    const {
      nextUrl,
      items,
      fetching,
      fetchSongsNext,
      playingSongId,
      isPlaying,
      playSong
    } = this.props;

    return (
      <InfiniteScroll fetchSongsNext={fetchSongsNext} nextUrl={nextUrl}>
        <div className="songs songs--gray">
          <div className="container">
            <SongsRendered
              songs={items}
              playingSongId={playingSongId}
              isPlaying={isPlaying}
              playSong={playSong}
            />
          </div>
          <Loader loading={fetching} />
        </div>
      </InfiniteScroll>
    );
  }
}

Songs.propTypes = propTypes;

export default Songs;

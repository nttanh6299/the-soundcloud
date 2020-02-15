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
  paramsUrl: PropTypes.shape({}),
  page: PropTypes.number.isRequired,
  playingSongId: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  playSong: PropTypes.func.isRequired,
  fetchSongs: PropTypes.func.isRequired
};

class Songs extends Component {
  componentDidMount() {
    const { fetchSongs } = this.props;
    const params = { q: 'house' };
    fetchSongs(1, params);
  }

  render() {
    const {
      items,
      fetching,
      paramsUrl,
      page,
      playingSongId,
      isPlaying,
      playSong,
      fetchSongs
    } = this.props;

    return (
      <InfiniteScroll
        fetchSongsNext={fetchSongs}
        page={page}
        paramsUrl={paramsUrl}
      >
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

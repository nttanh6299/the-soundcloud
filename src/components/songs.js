import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './loader';
import SongsRendered from './songs-rendered';
import InfiniteScroll from './infinite-scroll';
import { GENRES } from '../constants/GlobalConstants';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  fetching: PropTypes.bool.isRequired,
  paramsUrl: PropTypes.shape({}),
  page: PropTypes.number.isRequired,
  playingSongId: PropTypes.number,
  isPlaying: PropTypes.bool,
  playSong: PropTypes.func,
  fetchSongsIfNeeded: PropTypes.func.isRequired,
  fetchSongsNext: PropTypes.func.isRequired,
  currentPlaylist: PropTypes.string
};

class Songs extends Component {
  componentDidMount() {
    const { fetchSongsIfNeeded, currentPlaylist, paramsUrl } = this.props;
    const params = { ...paramsUrl, q: currentPlaylist };
    fetchSongsIfNeeded(currentPlaylist, params);
  }

  componentDidUpdate(prevProps) {
    const { currentPlaylist } = this.props;
    if (currentPlaylist !== prevProps.currentPlaylist) {
      const { fetchSongsIfNeeded, paramsUrl } = this.props;
      const params = { ...paramsUrl, q: currentPlaylist };
      fetchSongsIfNeeded(currentPlaylist, params);
    }
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
      fetchSongsNext,
      currentPlaylist
    } = this.props;

    return (
      <InfiniteScroll
        fetchSongsNext={fetchSongsNext}
        page={page}
        paramsUrl={paramsUrl}
        currentPlaylist={currentPlaylist}
      >
        <div className="container">
          <div id="songs" className="songs">
            <SongsRendered
              songs={items}
              playingSongId={playingSongId}
              isPlaying={isPlaying}
              playSong={playSong}
              currentPlaylist={currentPlaylist}
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

import React from 'react';
import PropTypes from 'prop-types';
import Loader from './loader';
import SongsRendered from './songs-rendered';
import InfiniteScroll from './infinite-scroll';

const propTypes = {
  fetchSongsNext: PropTypes.func.isRequired,
  playSong: PropTypes.func.isRequired,
  pauseSong: PropTypes.func.isRequired,
  nextUrl: PropTypes.string,
  songs: PropTypes.arrayOf(PropTypes.shape({})),
  playingSongId: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

const Songs = ({
  nextUrl,
  songs,
  loading,
  fetchSongsNext,
  playingSongId,
  playSong,
  pauseSong,
  isPlaying
}) => {
  return (
    <InfiniteScroll fetchSongsNext={fetchSongsNext} nextUrl={nextUrl}>
      <div className="songs container">
        <SongsRendered
          songs={songs}
          playingSongId={playingSongId}
          playSong={playSong}
          pauseSong={pauseSong}
          isPlaying={isPlaying}
        />
        <Loader loading={loading} />
      </div>
    </InfiniteScroll>
  );
};

Songs.propTypes = propTypes;

export default Songs;

import React from 'react';
import Loader from './loader';
import SongsRendered from './songs-rendered';
import InfiniteScroll from './infinite-scroll';

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

export default Songs;

import React from 'react';
import Loader from './loader';
import SongsRendered from './songs-rendered';
import InfiniteScroll from './infinite-scroll';

const Songs = ({ nextUrl, songs, loading, fetchSongsNext }) => {
  return (
    <InfiniteScroll fetchSongsNext={fetchSongsNext} nextUrl={nextUrl}>
      <div className="songs container">
        <SongsRendered songs={songs} />
        <Loader loading={loading} />
      </div>
    </InfiniteScroll>
  );
};

export default Songs;

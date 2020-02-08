import React from 'react';
import Loader from './loader';
import SongsRendered from './songs-rendered';

const Songs = ({ songs, loading }) => {
  console.log(songs);
  return (
    <div className="songs container">
      <SongsRendered songs={songs} />
      <Loader loading={loading} />
    </div>
  );
};

export default Songs;

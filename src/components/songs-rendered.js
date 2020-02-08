import React from 'react';
import SongCard from './song-card';

const SongsRendered = ({ songs }) => {
  return (
    <div className="row row--hoz-center">
      {songs && songs.map(song => <SongCard key={song.id} song={song} />)}
    </div>
  );
};

export default SongsRendered;

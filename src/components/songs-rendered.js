import React from 'react';
import SongCard from './song-card';

const SongsRendered = ({
  songs,
  playingSongId,
  playSong,
  pauseSong,
  isPlaying
}) => {
  return (
    <div className="row row--hoz-center">
      {songs &&
        songs.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            playingSongId={playingSongId}
            playSong={playSong}
            pauseSong={pauseSong}
            isPlaying={isPlaying}
          />
        ))}
    </div>
  );
};

export default SongsRendered;

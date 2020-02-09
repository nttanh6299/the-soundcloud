import React from 'react';
import PropTypes from 'prop-types';
import SongCard from './song-card';

const propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({})),
  playingSongId: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  playSong: PropTypes.func.isRequired,
  pauseSong: PropTypes.func.isRequired
};

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

SongsRendered.propTypes = propTypes;

export default SongsRendered;

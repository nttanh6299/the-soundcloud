import React from 'react';
import PropTypes from 'prop-types';
import SongCard from './song-card';

const propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({})),
  playingSongId: PropTypes.number,
  isPlaying: PropTypes.bool,
  playSong: PropTypes.func,
  currentPlaylist: PropTypes.string
};

const SongsRendered = ({
  songs,
  playingSongId,
  isPlaying,
  playSong,
  currentPlaylist
}) => {
  return (
    <div className="row">
      {songs &&
        songs.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            songIndex={index}
            playingSong={playingSongId === song.id}
            isPlaying={isPlaying}
            playSong={playSong}
            currentPlaylist={currentPlaylist}
          />
        ))}
    </div>
  );
};

SongsRendered.propTypes = propTypes;

export default SongsRendered;

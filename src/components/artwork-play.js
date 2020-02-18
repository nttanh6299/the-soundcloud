import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  songIndex: PropTypes.number,
  playingSong: PropTypes.bool,
  isPlaying: PropTypes.bool.isRequired,
  playSong: PropTypes.func.isRequired,
  currentPlaylist: PropTypes.string
};

const ArtworkPlay = ({
  songIndex,
  playingSong,
  isPlaying,
  playSong,
  currentPlaylist
}) => {
  function onTogglePlay() {
    const audio = document.getElementById('audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  }

  function onPlaySong() {
    playSong(currentPlaylist, songIndex);
  }

  return (
    <div
      className={`artwork-play ${playingSong ? ' artwork-play--active' : ''}`}
      onClick={playingSong ? onTogglePlay : onPlaySong}
      role="button"
    >
      <i
        className={`artwork-play__icon fas fa-${
          playingSong && isPlaying ? 'pause' : 'play'
        }`}
      ></i>
    </div>
  );
};

ArtworkPlay.propTypes = propTypes;

export default ArtworkPlay;

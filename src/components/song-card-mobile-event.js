import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  songIndex: PropTypes.number,
  playingSong: PropTypes.bool,
  isPlaying: PropTypes.bool.isRequired,
  playSong: PropTypes.func.isRequired
};

const SongCardMobileEvent = ({
  songIndex,
  playingSong,
  isPlaying,
  playSong
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
    playSong(songIndex);
  }

  return (
    <div
      className="song-card__mobile-event"
      role="button"
      onClick={playingSong ? onTogglePlay : onPlaySong}
    ></div>
  );
};

SongCardMobileEvent.propTypes = propTypes;

export default SongCardMobileEvent;

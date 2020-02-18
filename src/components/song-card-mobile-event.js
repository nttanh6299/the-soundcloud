import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  songIndex: PropTypes.number,
  playingSong: PropTypes.bool,
  isPlaying: PropTypes.bool.isRequired,
  playSong: PropTypes.func.isRequired,
  currentPlaylist: PropTypes.string
};

const SongCardMobileEvent = ({
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
      className="song-card__mobile-event"
      role="button"
      onClick={playingSong ? onTogglePlay : onPlaySong}
    ></div>
  );
};

SongCardMobileEvent.propTypes = propTypes;

export default SongCardMobileEvent;

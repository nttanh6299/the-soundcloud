import React from 'react';
import PropTypes from 'prop-types';
import SongDetails from './song-details';
import ArtworkPlay from './artwork-play';

const propTypes = {
  showHistory: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape({})),
  playlist: PropTypes.string.isRequired,
  playingSongId: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  onToggleShowHistory: PropTypes.func.isRequired,
  playSong: PropTypes.func.isRequired
};

const History = ({
  showHistory,
  songs,
  playlist,
  playingSongId,
  isPlaying,
  onToggleShowHistory,
  playSong
}) => {
  if (!showHistory) {
    return null;
  }

  return (
    <div className="history">
      <div
        className="history__overlay"
        onClick={onToggleShowHistory}
        role="button"
      ></div>
      <div className="history__main">
        <div className="history__header">
          <div className="history__header__title">Recently Played</div>
          <div
            className="history__header__close"
            onClick={onToggleShowHistory}
            role="button"
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="history__songs">
          {songs.map((song, index) => (
            <SongDetails
              key={index}
              backgroundImage={song.artworkUrl}
              title={song.title}
              username={song.user.username}
            >
              <ArtworkPlay
                playingSong={playingSongId === song.id}
                songIndex={index}
                isPlaying={isPlaying}
                playSong={playSong}
                currentPlaylist={playlist}
              />
            </SongDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

History.propTypes = propTypes;

export default History;

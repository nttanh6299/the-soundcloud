import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from './slider';
import audio from './audio';
import { formatSeconds } from '../utils/helpers/formatSeconds';
import { formatTitle } from '../utils/helpers/formatTitle';
import { volumeClassName } from '../utils/helpers/volumeClassName';

const propTypes = {
  player: PropTypes.shape({}).isRequired,
  song: PropTypes.shape({}),
  togglePlay: PropTypes.func.isRequired,
  toggleMuted: PropTypes.func.isRequired,
  changeCurrentTime: PropTypes.func.isRequired,
  changeVolume: PropTypes.func.isRequired,
  onToggleRepeat: PropTypes.func.isRequired,
  onToggleShuffle: PropTypes.func.isRequired,
  playPrevSong: PropTypes.func.isRequired,
  playNextSongWhileKeepRepeat: PropTypes.func.isRequired
};

const Player = ({
  player,
  song,
  togglePlay,
  toggleMuted,
  changeCurrentTime,
  changeVolume,
  onToggleRepeat,
  onToggleShuffle,
  playPrevSong,
  playNextSongWhileKeepRepeat
}) => {
  if (!song) {
    return null;
  }

  const {
    title,
    artworkUrl,
    user: { username }
  } = song;
  const {
    isPlaying,
    repeat,
    shuffle,
    duration,
    currentPlayingTime,
    muted,
    volume
  } = player;

  return (
    <div className="player">
      <div className="player__inner container">
        <div className="player__section player__section--song">
          <div className="player__song">
            <div
              className="player__song__artwork player__song__artwork--circle"
              style={{ backgroundImage: `url(${artworkUrl})` }}
            ></div>
            <div className="player__song__details">
              <Link className="player__song__title" to="/">
                {formatTitle(title)}
              </Link>
              <Link className="player__song__username" to="/">
                {username}
              </Link>
            </div>
          </div>
        </div>
        <div className="player__section">
          <div className="player__buttons">
            <div className="player__button" onClick={playPrevSong}>
              <i className="fas fa-backward"></i>
            </div>
            <div className="player__button" onClick={togglePlay} role="button">
              <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
            </div>
            <div
              className="player__button"
              onClick={playNextSongWhileKeepRepeat}
            >
              <i className="fas fa-forward"></i>
            </div>
          </div>
        </div>
        <div className="player__section player__section--time">
          <div className="player__time">
            {formatSeconds(currentPlayingTime)}
          </div>
        </div>
        <div className="player__section player__section--slider">
          <Slider
            max={duration}
            value={currentPlayingTime}
            onChange={changeCurrentTime}
          />
        </div>
        <div className="player__section player__section--time">
          <div className="player__time">{formatSeconds(duration)}</div>
        </div>
        <div className="player__section player__section__toggle-volume">
          <div
            className={`player__button ${
              shuffle ? 'player__button--active' : ''
            }`}
            onClick={onToggleShuffle}
            title="Shuffle"
          >
            <i className="fas fa-random"></i>
          </div>
          <div
            className={`player__button ${
              repeat ? 'player__button--active' : ''
            }`}
            onClick={onToggleRepeat}
            title="Repeat one"
          >
            <i className="fas fa-sync-alt"></i>
          </div>
          <div className="player__button" onClick={toggleMuted}>
            <i
              className={`fas fa-volume-${volumeClassName(volume, muted)}`}
            ></i>
          </div>
        </div>
        <div className="player__section player__section--volume">
          <Slider max={1} value={muted ? 0 : volume} onChange={changeVolume} />
        </div>
      </div>
    </div>
  );
};

Player.propTypes = propTypes;

export default audio(Player);

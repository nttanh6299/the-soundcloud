import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from './slider';
import audio from './audio';
import { formatSeconds } from '../utils/helpers/formatSeconds';

const propTypes = {
  player: PropTypes.shape({}).isRequired,
  song: PropTypes.shape({}),
  togglePlay: PropTypes.func.isRequired,
  onToggleRepeat: PropTypes.func.isRequired,
  onToggleShuffle: PropTypes.func.isRequired
};

const Player = ({
  player,
  song,
  togglePlay,
  onToggleRepeat,
  onToggleShuffle
}) => {
  if (!song) {
    return null;
  }

  const {
    title,
    artworkUrl,
    user: { username }
  } = song;
  const { isPlaying, repeat, shuffle, duration, currentPlayingTime } = player;
  return (
    <div className="player">
      <div className="player__inner container">
        <div className="player__section">
          <div className="player__buttons">
            <div className="player__button">
              <i className="fas fa-backward"></i>
            </div>
            <div className="player__button" onClick={togglePlay} role="button">
              <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
            </div>
            <div className="player__button">
              <i className="fas fa-forward"></i>
            </div>
            <div
              className={`player__button ${
                shuffle ? 'player__button--active' : ''
              }`}
              onClick={onToggleShuffle}
            >
              <i className="fas fa-random"></i>
            </div>
            <div
              className={`player__button ${
                repeat ? 'player__button--active' : ''
              }`}
              onClick={onToggleRepeat}
            >
              <i className="fas fa-redo"></i>
            </div>
          </div>
        </div>
        <div className="player__section player__section--time">
          <div className="player__time">
            {formatSeconds(currentPlayingTime)}
          </div>
        </div>
        <div className="player__section player__section--slider">
          <Slider />
        </div>
        <div className="player__section player__section--time">
          <div className="player__time">{formatSeconds(duration)}</div>
        </div>
        <div className="player__section player__section__toggle-volume">
          <div className="player__button">
            <i className="fas fa-volume-up"></i>
          </div>
        </div>
        <div className="player__section player__section--volume">
          <Slider />
        </div>
        <div className="player__section player__section--song">
          <div className="player__song">
            <div
              className="player__song__artwork player__song__artwork--circle"
              style={{ backgroundImage: `url(${artworkUrl})` }}
            ></div>
            <div className="player__song__details">
              <Link className="player__song__title" to="/">
                {title}
              </Link>
              <Link className="player__song__username" to="/">
                {username}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = propTypes;

export default audio(Player);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from './slider';

const Player = ({ song }) => {
  if (song.length === 0) {
    return null;
  }

  const {
    id,
    title,
    artworkUrl,
    user: { username }
  } = song[0];
  return (
    <div className="player">
      <div className="player__inner container">
        <div className="player__section">
          <div className="player__buttons">
            <div className="player__button">
              <i className="fas fa-backward"></i>
            </div>
            <div className="player__button">
              <i className="fas fa-pause"></i>
            </div>
            <div className="player__button">
              <i className="fas fa-forward"></i>
            </div>
            <div className="player__button">
              <i className="fas fa-random"></i>
            </div>
            <div className="player__button">
              <i className="fas fa-redo"></i>
            </div>
          </div>
        </div>
        <div className="player__section player__section--time">
          <div className="player__time">0:00</div>
        </div>
        <div className="player__section player__section--slider">
          <Slider />
        </div>
        <div className="player__section player__section--time">
          <div className="player__time">3:23</div>
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
              className="player__song__artwork"
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

export default Player;

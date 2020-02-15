import React from 'react';
import PropTypes from 'prop-types';
import { getImageUrl } from '../utils/helpers/getImageUrl';
import { formatTitle } from '../utils/helpers/formatTitle';
import { IMAGE_SIZE } from '../constants/GlobalConstants';
import { Link } from 'react-router-dom';
import ArtworkPlay from './artwork-play';
import SongCardMobileEvent from './song-card-mobile-event';

const propTypes = {
  song: PropTypes.shape({}),
  playingSong: PropTypes.bool,
  songIndex: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  playSong: PropTypes.func.isRequired
};

const SongCard = ({ song, playingSong, songIndex, isPlaying, playSong }) => {
  const { title, artworkUrl, user } = song;
  const { avatarUrl, username } = user;

  return (
    <div className={`song-card ${playingSong ? 'song-card--active' : ''}`}>
      <div className="song-card__inner">
        <div
          className="song-card__artwork"
          style={{
            backgroundImage: `${
              !!artworkUrl
                ? `url(${getImageUrl(artworkUrl, IMAGE_SIZE.LARGE)})`
                : ''
            } `
          }}
        >
          <ArtworkPlay
            playingSong={playingSong}
            songIndex={songIndex}
            isPlaying={isPlaying}
            playSong={playSong}
          />
        </div>
        <div className="song-card__body row">
          <div
            className="song-card__avatar"
            style={{
              backgroundImage: `${
                !!avatarUrl ? `url(${getImageUrl(avatarUrl)})` : ''
              }`
            }}
          ></div>
          <div className="song-card__details">
            <Link className="song-card__title" to="/" title={title}>
              {formatTitle(title)}
            </Link>
            <Link className="song-card__username" to="/" title={username}>
              {username}
            </Link>
          </div>
        </div>
      </div>
      <SongCardMobileEvent
        playingSong={playingSong}
        songIndex={songIndex}
        isPlaying={isPlaying}
        playSong={playSong}
      />
    </div>
  );
};

SongCard.propTypes = propTypes;

export default SongCard;

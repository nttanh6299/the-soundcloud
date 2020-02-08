import React from 'react';
import { getImageUrl } from '../utils/helpers/getImageUrl';
import { IMAGE_SIZE } from '../constants/GlobalConstants';
import { Link } from 'react-router-dom';

const SongCard = ({ song }) => {
  const { id, title, artworkUrl, user } = song;
  const { avatarUrl, username } = user;

  return (
    <div className="song-card">
      <div className="song-card__inner">
        <div
          className="song-card__artwork"
          style={{
            backgroundImage: `url(${getImageUrl(artworkUrl, IMAGE_SIZE.LARGE)})`
          }}
        ></div>
        <div className="song-card__body row">
          <div
            className="song-card__avatar"
            style={{
              backgroundImage: `url(${getImageUrl(avatarUrl)})`
            }}
          ></div>
          <div className="song-card__details">
            <Link className="song-card__title" to="/" title={title}>
              {title}
            </Link>
            <Link className="song-card__username" to="/" title={username}>
              {username}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  backgroundCircle: PropTypes.bool,
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  children: PropTypes.node
};

const SongDetails = ({
  className = '',
  backgroundCircle,
  backgroundImage,
  title,
  username,
  children
}) => {
  return (
    <div className={'song-details ' + className}>
      <div
        className={`song-details__artwork ${
          backgroundCircle ? 'song-details__artwork--circle' : ''
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {children}
      </div>
      <div className="song-details__details">
        <a className="song-details__title" href="#">
          {title}
        </a>
        <a className="song-details__username" href="#">
          {username}
        </a>
      </div>
    </div>
  );
};

SongDetails.propTypes = propTypes;

export default SongDetails;

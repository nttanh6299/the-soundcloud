import React, { Component } from 'react';

class ArtworkPlay extends Component {
  constructor(props) {
    super(props);

    this.onPlaySong = this.onPlaySong.bind(this);
    this.onPauseSong = this.onPauseSong.bind(this);
  }

  onPlaySong() {
    this.props.playSong(this.props.songId);
  }

  onPauseSong() {
    this.props.pauseSong();
  }

  render() {
    const { songId, playingSongId, isPlaying } = this.props;

    return (
      <div
        className={`artwork-play ${
          songId === playingSongId ? ' artwork-play--active' : ''
        }`}
        onClick={
          songId === playingSongId && isPlaying
            ? this.onPauseSong
            : this.onPlaySong
        }
        role="button"
      >
        <i
          className={`artwork-play__icon fas fa-${
            songId === playingSongId && isPlaying ? 'pause' : 'play'
          }`}
        ></i>
      </div>
    );
  }
}

export default ArtworkPlay;

import React, { Component } from 'react';

class ArtworkPlay extends Component {
  constructor(props) {
    super(props);

    this.state = { isPlaying: false };
  }

  render() {
    return (
      <div
        className={`artwork-play ${
          this.state.isPlaying ? ' artwork-play--active' : ''
        }`}
        onClick={() => this.setState({ isPlaying: !this.state.isPlaying })}
        role="button"
      >
        <i
          className={`artwork-play__icon fas fa-${
            this.state.isPlaying ? 'pause' : 'play'
          }`}
        ></i>
      </div>
    );
  }
}

export default ArtworkPlay;

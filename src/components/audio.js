import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  audioUrl: PropTypes.string.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired
};

const audio = InnerComponent => {
  class Audio extends Component {
    constructor(props) {
      super(props);

      this.audio = null;

      this.onPlay = this.onPlay.bind(this);
      this.onPause = this.onPause.bind(this);
      this.onTogglePlay = this.onTogglePlay.bind(this);
    }

    onPlay() {
      const { onPlay } = this.props;
      onPlay();
    }

    onPause() {
      const { onPause } = this.props;
      onPause();
    }

    onTogglePlay() {
      const { audio } = this;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    render() {
      const { audioUrl } = this.props;

      return (
        <div>
          <audio
            id="audio"
            src={audioUrl}
            ref={element => (this.audio = element)}
            onPlay={this.onPlay}
            onPause={this.onPause}
            autoPlay
          />
          <InnerComponent {...this.props} togglePlay={this.onTogglePlay} />
        </div>
      );
    }
  }

  Audio.propTypes = propTypes;

  return Audio;
};

export default audio;

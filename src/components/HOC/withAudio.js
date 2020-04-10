import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  audioUrl: PropTypes.string.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onLoadStart: PropTypes.func.isRequired,
  onLoadedMetadata: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  onVolumeChange: PropTypes.func.isRequired,
  playNextSong: PropTypes.func.isRequired
};

const withAudio = InnerComponent => {
  class Audio extends Component {
    constructor(props) {
      super(props);

      this.audio = null;

      this.onPlay = this.onPlay.bind(this);
      this.onPause = this.onPause.bind(this);
      this.onLoadStart = this.onLoadStart.bind(this);
      this.onLoadedMetadata = this.onLoadedMetadata.bind(this);
      this.onTimeUpdate = this.onTimeUpdate.bind(this);
      this.onVolumeChange = this.onVolumeChange.bind(this);
      this.onEnded = this.onEnded.bind(this);

      this.togglePlay = this.togglePlay.bind(this);
      this.toggleMuted = this.toggleMuted.bind(this);
      this.changeCurrentTime = this.changeCurrentTime.bind(this);
      this.changeVolume = this.changeVolume.bind(this);
    }

    componentDidUpdate(prevProps) {
      const { audio, props } = this;
      if (
        audio.ended &&
        prevProps.audioUrl === props.audioUrl &&
        prevProps.player.repeat
      ) {
        audio.currentTime = 0;
        audio.play();
      }
    }

    onLoadStart() {
      const { onLoadStart } = this.props;
      onLoadStart();
    }

    onLoadedMetadata() {
      const { audio, props } = this;
      const { onLoadedMetadata } = props;
      onLoadedMetadata(Math.floor(audio.duration));
      audio.play();
    }

    onTimeUpdate() {
      const { audio, props } = this;
      const { onTimeUpdate, player } = props;
      const { currentPlayingTime } = player;
      const currentTimeAudio = Math.floor(audio.currentTime);
      if (currentPlayingTime !== currentTimeAudio) {
        onTimeUpdate(currentTimeAudio);
      }
    }

    onPlay() {
      const { onPlay } = this.props;
      onPlay();
    }

    onPause() {
      const { onPause } = this.props;
      onPause();
    }

    onVolumeChange() {
      const { audio, props } = this;
      const { onVolumeChange } = props;
      const { volume, muted } = audio;
      onVolumeChange(volume, muted);
    }

    onEnded() {
      const { playNextSong } = this.props;
      playNextSong();
    }

    togglePlay() {
      //trigger onPlay/Pause automatically
      const { audio } = this;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    toggleMuted() {
      //trigger onVolumeChange automatically
      const { audio } = this;
      audio.muted = !audio.muted;
    }

    changeCurrentTime(time) {
      //trigger onTimeUpdate automatically
      const { audio } = this;
      audio.currentTime = time;
    }

    changeVolume(volume) {
      //trigger onVolumeChange automatically
      const { audio } = this;
      audio.muted = false;
      audio.volume = volume;
    }

    render() {
      const { audioUrl } = this.props;

      return (
        <div>
          <audio
            id="audio"
            crossOrigin="anonymous"
            src={audioUrl}
            ref={element => (this.audio = element)}
            onLoadStart={this.onLoadStart}
            onLoadedMetadata={this.onLoadedMetadata}
            onTimeUpdate={this.onTimeUpdate}
            onVolumeChange={this.onVolumeChange}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onEnded={this.onEnded}
          />
          <InnerComponent
            {...this.props}
            togglePlay={this.togglePlay}
            toggleMuted={this.toggleMuted}
            changeCurrentTime={this.changeCurrentTime}
            changeVolume={this.changeVolume}
          />
        </div>
      );
    }
  }

  Audio.propTypes = propTypes;

  return Audio;
};

export default withAudio;

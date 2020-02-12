import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { offsetLeft } from '../utils/helpers/offsetLeft';
import { preventClick } from '../utils//helpers/preventClick';

const propTypes = {
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

class Slider extends Component {
  constructor(props) {
    super(props);

    this.slider = null;

    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  onClick(e) {
    const { max, onChange } = this.props;
    const { currentTarget, clientX } = e;
    const left = offsetLeft(currentTarget);
    const value =
      Math.min(Math.max(clientX - left, 0), currentTarget.offsetWidth) /
      currentTarget.offsetWidth;

    onChange(value * max);
  }

  onMouseDown() {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove(e) {
    const { slider, props } = this;
    const { max, onChange } = props;
    const left = offsetLeft(slider);
    const value =
      Math.min(Math.max(e.clientX - left, 0), slider.offsetWidth) /
      slider.offsetWidth;

    onChange(value * max);
  }

  onMouseUp() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  render() {
    const { max, value, className } = this.props;
    const currentWidth = `${(value / max) * 100}%`;

    return (
      <div
        className={`slider ${className ? className : ''}`}
        onClick={this.onClick}
        ref={node => (this.slider = node)}
      >
        <div className="slider__bar">
          {max > 0 ? (
            <div className="slider__bar__fill" style={{ width: currentWidth }}>
              <span
                className="slider__handle"
                role="button"
                onClick={preventClick}
                onMouseDown={this.onMouseDown}
              ></span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

Slider.propTypes = propTypes;

export default Slider;

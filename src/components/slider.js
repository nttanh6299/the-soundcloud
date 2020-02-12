import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { offsetLeft } from '../utils/helpers/offsetLeft';
import { preventClick } from '../utils//helpers/preventClick';
import { DEBOUNCE_TIME } from '../constants/GlobalConstants';
import { debounce } from 'lodash';

const propTypes = {
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      isMouseDown: false
    };

    this.slider = null;

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.setStateDebounce = this.setStateDebounce.bind(this);
    this.emitChangeDebounce = debounce(this.setStateDebounce, DEBOUNCE_TIME);
  }

  setStateDebounce(props) {
    this.setState({ ...props });
  }

  componentDidUpdate(prevProps) {
    const { value, isMouseDown } = this.state;
    if (value !== prevProps.value && !isMouseDown) {
      this.setState({ value: prevProps.value });
    }
  }

  componentWillUnmount() {
    const { slider, onMouseMove, onMouseUp } = this;
    slider.removeEventListener('mousemove', onMouseMove);
    slider.removeEventListener('mouseup', onMouseUp);
  }

  onMouseDown(e) {
    const { slider, onMouseMove, onMouseUp } = this;

    this.setState({ isMouseDown: true });

    onMouseMove(e);

    slider.addEventListener('mousemove', onMouseMove);
    slider.addEventListener('mouseup', onMouseUp);
  }

  onMouseMove(e) {
    const { max } = this.props;
    const { currentTarget, clientX } = e;
    const left = offsetLeft(currentTarget);
    const value =
      Math.min(Math.max(clientX - left, 0), currentTarget.offsetWidth) /
      currentTarget.offsetWidth;
    this.setState({ value: value * max });
  }

  onMouseUp() {
    const { slider, props, onMouseMove, onMouseUp, emitChangeDebounce } = this;
    const { value } = this.state;
    const { onChange } = props;

    onChange(value);

    emitChangeDebounce({ isMouseDown: false });

    slider.removeEventListener('mousemove', onMouseMove);
    slider.removeEventListener('mouseup', onMouseUp);
  }

  render() {
    const { max, className } = this.props;
    const { value } = this.state;
    const currentWidth = `${(value / max) * 100}%`;

    return (
      <div
        className={`slider ${className ? className : ''}`}
        onMouseDown={this.onMouseDown}
        ref={node => (this.slider = node)}
      >
        <div className="slider__bar">
          {max > 0 ? (
            <div className="slider__bar__fill" style={{ width: currentWidth }}>
              <span
                className="slider__handle"
                role="button"
                onClick={preventClick}
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

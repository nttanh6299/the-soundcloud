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

    // this.state = {
    //   value: 0,
    //   isMouseDown: false
    // };

    this.slider = null;

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    //this.setStateDebounce = this.setStateDebounce.bind(this);
    //this.emitChangeDebounce = debounce(this.setStateDebounce, DEBOUNCE_TIME);
  }

  // setStateDebounce(props) {
  //   this.setState({ ...props });
  // }

  // componentDidUpdate(prevProps) {
  //   const { value, isMouseDown } = this.state;
  //   if (value !== prevProps.value && !isMouseDown) {
  //     this.setState({ value: prevProps.value });
  //   }
  // }

  componentWillUnmount() {
    const { onMouseMove, onMouseUp } = this;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }

  onMouseDown(e) {
    const { onMouseMove, onMouseUp } = this;

    //this.setState({ isMouseDown: true });

    onMouseMove(e);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  onMouseMove(e) {
    const { slider, props } = this;
    const { max, onChange } = props;
    const left = offsetLeft(slider);
    const value =
      Math.min(Math.max(e.clientX - left, 0), slider.offsetWidth) /
      slider.offsetWidth;
    onChange(value * max);
    // this.setState({ value: value * max }, () => {
    //   onChange(this.state.value);
    // });
  }

  onMouseUp() {
    const { onMouseMove, onMouseUp } = this;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    //this.emitChangeDebounce({ isMouseDown: false });
  }

  render() {
    const { max, value, className } = this.props;
    //const { value } = this.state;
    const currentWidth = `${(value / max) * 100}%`;

    return (
      <div
        className={`slider ${className ? className : ''}`}
        onMouseDown={this.onMouseDown}
        onClick={preventClick}
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

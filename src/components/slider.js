import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

class Slider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { max, value, className } = this.props;
    const currentWidth = `${(value / max) * 100}%`;

    return (
      <div className={`slider ` + className}>
        <div className="slider__bar">
          {max > 0 ? (
            <div className="slider__bar__fill" style={{ width: currentWidth }}>
              <span className="slider__handle" role="button"></span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

Slider.propTypes = propTypes;

export default Slider;

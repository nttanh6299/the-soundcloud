import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="slider">
        <div className="slider__bar">
          <div className="slider__bar__fill" style={{ width: '10%' }}>
            <span className="slider__handle" role="button"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;

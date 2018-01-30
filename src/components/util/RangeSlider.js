import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class RangeSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state;
    const horizontalLabels = {
      0:  this.props.min,
      5:  5,
      10: 10,
      15: 'Over 10'

    }
    return (
      <div className='slider'>
        <Slider
          min={this.props.min}
          max={this.props.max}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
          tooltip={false}
          labels={horizontalLabels}
        />
      </div>
    )
  }
}

export default RangeSlider
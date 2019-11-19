// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  constructor ({ onReceiveCoordinates }) {
    super()
    this.onReceiveCoordinates = onReceiveCoordinates
  }
  handleClick = (event) => {
    this.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render () {
    return (
      <button onClick={this.handleClick}/>
    )
  }
}

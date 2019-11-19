// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
  constructor ({ onDelayedClick, delay }) {
    super()
    this.onDelayedClick = onDelayedClick
    this.delay = delay
  }

  handleClick = (event) => {
    event.persist()
    setTimeout(this.onDelayedClick, this.delay, event)
  }

  render () {
    return (
      <button onClick={this.handleClick} />
    )
  }
}

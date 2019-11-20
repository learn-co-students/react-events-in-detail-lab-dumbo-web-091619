// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  handleOnClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
  
  render() {
    return(
      <div>
        <button onClick={this.handleOnClick}>Delayed</button>
      </div>
    )
  }
}

export default DelayedButton
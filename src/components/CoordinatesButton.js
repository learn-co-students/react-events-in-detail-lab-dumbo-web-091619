import React, { Component } from 'react';

class CoordinatesButton extends Component {

handleE = (event) => {
  this.props.onReceiveCoordinates([event.clientX, event.clientY])
}

  render() {
    return (
      <div>
        <button onClick={this.handleE}>
        </button>
      </div>
    );
  }

}

export default CoordinatesButton;

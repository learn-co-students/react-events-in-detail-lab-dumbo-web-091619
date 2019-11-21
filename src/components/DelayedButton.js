import React, { Component } from 'react';

class DelayedButton extends Component {
handleE = (event) => {
  event.persist()
  setTimeout(() => this.props.onDelayedClick(event))
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

export default DelayedButton;

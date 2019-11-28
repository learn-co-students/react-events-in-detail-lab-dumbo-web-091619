// Code DelayedButton Component Here
import React, { Component } from 'react';

export class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <div>
                Hi from DelayedButton.js
                <button onClick={ this.handleClick }>Click on Me!</button>
            </div>
        );
    }
}

export default DelayedButton;

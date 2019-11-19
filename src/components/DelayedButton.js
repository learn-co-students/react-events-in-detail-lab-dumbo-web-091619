import React from 'react'

export default class DelayedButton extends React.Component {


  delayed_click = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }


  render(){
    return(
      <button onClick={ this.delayed_click }>Delayed Button</button>
    )
  }

}

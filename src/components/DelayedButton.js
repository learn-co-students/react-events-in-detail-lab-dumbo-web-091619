import React from 'react';
export default class DelayedButton extends React.Component{

  fire = (e) => {
    console.log(this.props.delay)
    // e.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, e)
  }

  render(){
    return(
      <button onClick={this.fire}></button>
    )
  }
}
// <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />

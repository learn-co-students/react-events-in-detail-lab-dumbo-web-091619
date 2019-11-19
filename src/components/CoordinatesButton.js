import React from 'react'

export default class CoordinatesButton extends React.Component {

  get_mouse_data = (event) => {
     this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }

  render(){
    return(
      <button onClick={ this.get_mouse_data }>Get Mouse Data</button>
    )
  }
}

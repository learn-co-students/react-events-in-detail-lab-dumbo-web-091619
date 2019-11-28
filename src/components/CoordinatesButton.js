// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component{

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    render(){
        
        return(
            <div>
                Hi from CoordinatesButton.js
                <button onClick={ this.handleClick } >Click on Me!</button>
            </div>
        )
    }
}

export default CoordinatesButton
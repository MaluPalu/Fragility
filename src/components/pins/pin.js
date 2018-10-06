import React, { Component } from 'react';
import './pin.css';

class Pins extends Component {
   
    render() {
        return (
            <div className="Pin">
            <div style={{top: this.props.x, left: this.props.y}}>d</div>
            </div>
        )
    }
}

export default Pins;
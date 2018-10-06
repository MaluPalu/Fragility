import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pins from '../pins/pin.js';
import './animals.css';

class Animals extends Component {
    showAnimal(show, animal) {
        for (let i=0; i<animal.coordinates.length; i++){
            let lat = animal.coordinates[i][0]
            let long = animal.coordinates[i][1]
            if(lat !== null && long !== null) {
                let latPin = ((lat*195.2)/360);
                let longPin = ((long*1213)/180);
                console.log(latPin, longPin);
                ReactDOM.render(<Pins x={latPin} y={longPin}/>, document.getElementById("pinId"))

            } else {

            }
            
        }
      
    };
    render() {
       
        return (
            <div className="Animal">
            <div>{this.props.name} ({this.props.taxonomy}) {this.props.redlist}</div>
            <button onClick={(e) => this.showAnimal(e, this.props.animal)}>{this.props.name} Locations</button>
            </div>
        )
    }
}

export default Animals;


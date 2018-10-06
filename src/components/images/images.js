import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Animals from '../animals/animals.js';
import './images.css';


class Images extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }  
    }
    onMouseEnterHandler(e, animal) {
        this.setState({
            hover: true
        });
        console.log('enter');
        console.log(animal);
        ReactDOM.render(<Animals animal={animal} name={animal.name} redlist={animal.redlist} taxonomy={animal.taxonomy} coordinates={animal.coordinates} />, document.getElementById('animalId'))
    }
    onMouseLeaveHandler(e) {
        this.setState({
            hover: false
        });
        console.log('leave');
    }
    
    render() {
       
        return (
        <div>
            <div
                onMouseEnter={(e) => this.onMouseEnterHandler(e, this.props.animal)}
                onMouseLeave={(e) => this.onMouseLeaveHandler(e)} >
                <img className="sharkImg" src={"./imgs/shark-" + this.props.animal.id + ".jpeg"} />
            </div>
        </div>
        )
    }
}

export default Images;
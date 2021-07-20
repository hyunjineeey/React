import React, { Component } from 'react';
import {choice} from './helpers';
import './Box.css'

class Box extends Component {
    static defaultProps = {
        allColors: ["purple", "magenta", "violet", "pink"]
    }
    constructor(props) {
        super(props);
        this.state = {color: choice(this.props.colors)};
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor() {
        let newColor
        do {
            choice(this.props.colors);
        } while (newColor === this.state.color);

        this.setState({color: newColor})
    }
    handleClick() {
        this.pickColor();
    }
    render() { 
        return (
            <div 
                className="Box" 
                style={{backgroundColor: this.state.color}} 
                onClick={this.handleClick} 
            />
        );
    }
}
 
export default Box;
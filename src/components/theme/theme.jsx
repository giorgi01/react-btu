import React from 'react'
import { Component } from "react";
import Button from '../ui/button';

import './theme.css'

class Theme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: props.color, text: props.text};
    }
    
    changeColor(color){
        this.setState({color: color});
    };

    render(){
        return (
        <div>
            <ul class="list-group list-group-horizontal-sm">
                <li className="list-group-item">
                    <Button text="Red" className="btn btn-primary-red" type="button" onClick={() => this.changeColor('red')}/>
                </li>
                <li className="list-group-item">
                    <Button text="Green" className="btn btn-primary-green" type="button" onClick={() => this.changeColor('green')}/>
                </li>
                <li className="list-group-item">
                    <Button text="Blue" className="btn btn-primary-blue" type="button" onClick={() => this.changeColor('blue')}/>
                </li>
                <li className="list-group-item">
                    <Button text="Pink" className="btn btn-primary-pink" type="button" onClick={() => this.changeColor('pink')}/>
                </li>
                <li className="list-group-item">
                    <Button text="Yellow" className="btn btn-primary-yellow" type="button" onClick={() => this.changeColor('yellow')}/>
                </li>
                <li className="list-group-item">
                    <Button text="Orange" className="btn btn-primary-orange" type="button" onClick={() => this.changeColor('orange')}/>
                </li>
                <li className="list-group-item">
                    <Button text="Purple" className="btn btn-primary-purple" type="button" onClick={() => this.changeColor('purple')}/>
                </li>
            </ul>
            <div style={{backgroundColor: this.state.color}} >
                  {this.state.text}
            </div>
        </div>
       );
    }
}

export default Theme;
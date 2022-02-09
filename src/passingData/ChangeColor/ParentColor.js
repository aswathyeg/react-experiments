import React from 'react';
import ChildColor from './ChildColor';
import './index.css';
export default class ParentColor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:'select a color'
        }
        this.handleClick=this.handleClick.bind(this);
    }
handleClick=(newColor)=>{
    this.setState({
        color:newColor
    })
}
    render(){
        return(
            <div className="parent-component">
                <h3>Parent Component</h3>
                
                <p>{this.state.color} </p>
                <ChildColor onColorChange={this.handleClick}/>
            </div>
        )
    }
}
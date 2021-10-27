import React, { Component } from 'react';

export default class InputBox extends Component{

    constructor(){
        super();
        this.state={
value :props.value||''

        }
    }
    handleKeyUp(e){
        if (e.keyCode === KeyCode.KEY_RETURN) {
            // Add new Todo Here
            // Clear the text box
        }

    }
    handleChange(e){
        this.setState(e.target.value)
    }
    render(){
        return(
           
                <input type="text" className="form-control add-todo" 
                placeholder="Add New"
                 value={this.state.value}
                 onKeyUp={this.handleKeyUp.bind(this)}
onChange={this.handleChange.bind(this)}

                >

                </input>
        )
    }
                }
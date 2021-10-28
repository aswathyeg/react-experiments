import React, { Component } from 'react';

import KeyCode from 'keycode';

export default class InputBox extends Component{

    constructor(props){
        super(props);
        this.state={
value :props.value||''

        }
    }
    handleChange(e){
        this.setState({value:e.target.value});
    }
    clear(){
        this.setState({value:''})
    }
    handleKeyUp(e){
        const{ addNewItem}=this.props;
        const text=this.state.value.trim();
        if (e.keyCode === KeyCode.KEY_RETURN && text) {
            addNewItem(text);
            this.clear();
            // Add new Todo Here
            // Clear the text box
        }

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
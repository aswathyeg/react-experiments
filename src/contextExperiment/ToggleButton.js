import React from 'react';
import {changeContext} from './contexts/changeTheme';
export default class ToggleButton extends React.Component{
   static contextType=changeContext;
    render(){
        const {isToggle}=this.context;
        return(
            <div>
                <button onClick={isToggle}>Toggle</button>
            </div>
        )
    }
}
import React from 'react';
import { ThemeContext } from './contexts/ThemeContext';

class ThemeToggle extends React.Component{
    static contextType=ThemeContext;
    render(){
    const {toggleTheme}=this.context;
              
        return(
            <div>
                <button onClick={toggleTheme}>Toggle</button>
            </div>
        )
    }
}
export default ThemeToggle;
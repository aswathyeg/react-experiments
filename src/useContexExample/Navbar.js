import React from 'react';
import './index.css';
import {ThemeContext} from './contexts/ThemeContext';
class Navbar extends React.Component{
    static contextType=ThemeContext;//property which access this.value from ThemeContext
    render(){
        console.log(this.context);
        const{isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark;
        return(
          <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>React Usecontext</h1>
               <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    </ul>
                    </nav>
        )
    }
}
export default Navbar;
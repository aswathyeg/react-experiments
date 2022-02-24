
//acccessing context method 2 and consuming multiple contexts
import React from 'react';
import './index.css';
import {ThemeContext} from './contexts/ThemeContext';
import { AuthContext } from './contexts/AuthContext';
class Navbar extends React.Component{
    static contextType=ThemeContext;//property which access this.value from ThemeContext
    render(){
                return(
            <AuthContext.Consumer >{(authContext)=> //wrapped themecontext with authcontext
            (
                <ThemeContext.Consumer>{(themeContext)=>{
                    const {isAuthenticated,isToggle}=authContext;
                    const{isLightTheme,light,dark}=themeContext;
                   const theme=isLightTheme?light:dark;

                
                return( <nav style={{background:theme.ui,color:theme.syntax}}>
                    <h1>React Usecontext</h1>
                    <div onClick={isToggle}>
                        {isAuthenticated? 'Logged In':'Logged Out'}
                    </div>
                   <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        </ul>
                        </nav>
             
            )
        }}
    </ThemeContext.Consumer>
            )}
            
</AuthContext.Consumer>
        );}}
export default Navbar;
//accessing context method 1
import React from 'react';
import {AuthContext} from './contexts/Auth';
import {changeContext} from './contexts/changeTheme';
export default class Header extends React .Component{
    static contextType=changeContext;
    render(){
        
        return(
            <AuthContext.Consumer>{(authContext)=> //wrapped themecontext with authcontext
                (
            <changeContext.Consumer>{(changeContext)=>{
                const {isAuthenticated,isToggle}=authContext;
                const {isLight,light,dark}=changeContext;
        const theme=isLight? light:dark;

        return( <nav style={{background:theme.ui,color:theme.syntax}}>
            <h1>React Usecontext</h1>
            <div onClick={isToggle}>
                {isAuthenticated? 'Logged In':'Logged Out'}
            </div>
            </nav>
             
             
            )
        }}
            </changeContext.Consumer>
             )}
            </AuthContext.Consumer>
            );}}
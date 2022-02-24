import React from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import './index.css';
class Booklist extends React.Component{
    static contextType=ThemeContext;
    render(){
                
        const{isLightTheme,light,dark}=this.context;
        const theme=isLightTheme?light:dark;
        return(
            <div  style={{background:theme.bg,color:theme.syntax}}className="book-list">
                <ul>
                
               
                    <li style={{background:theme.ui}}>Tom and Jerry</li>
                    <li style={{background:theme.ui}}>How to catch a star</li>
                    <li style={{background:theme.ui}}>Ruskinbond</li>
                    </ul>
            </div>
        )
    }
}
export default Booklist;
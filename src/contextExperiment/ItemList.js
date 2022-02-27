//accesssing context method 2

import React from 'react';
import './index.css';
import {changeContext} from './contexts/changeTheme';
export default class ItemList extends React.Component {
    static contextType=changeContext;
    
    render() {
        const {isLight,light,dark}=this.context;
        const theme=isLight?light:dark;
        return (
            <div style={{background:theme.bg,color:theme.syntax}}className="book-list">
                <ul>
                
               
                <li style={{background:theme.ui}}>Tom and Jerry</li>
                <li style={{background:theme.ui}}>How to catch a star</li>
                <li style={{background:theme.ui}}>Ruskinbond</li>
                </ul>


            </div>
        )
    }
}

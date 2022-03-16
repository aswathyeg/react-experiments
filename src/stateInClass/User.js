import React from 'react';
export default class User extends React.Component{
    render(){
        return(
            <div>
                <li>
                    {this.props.name}
                </li>
            </div>
        )
    }
   
}
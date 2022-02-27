import React, { createContext } from 'react';
export const AuthContext=createContext();
export default class Auth extends React .Component{
    
state={
    isAuth:true,

   
}
toggling=()=>{
    this.setState({isAuth:!this.state.isAuth})
}
    render(){
        return(
            <AuthContext.Provider value={{...this.state,toggling:this.toggling}}>
               {this.props.children}

            </AuthContext.Provider>
        )
    }
}
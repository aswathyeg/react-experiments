import React, { createContext } from 'react';
export const AuthContext=createContext();
class AuthContextProvider extends React.Component{
   state={
       isAuthenticated:true

   }
   isToggle=()=>{
       this.setState({isAuthenticated:!this.state.isAuthenticated})
   }
    render(){
        return(
            <div>
            <AuthContext.Provider value={{...this.state, isToggle:this.isToggle}}>
                {this.props.children}
            </AuthContext.Provider>
            </div>
            

        )
    }
}
export default AuthContextProvider;
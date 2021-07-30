import React from 'react';
interface IUserOwnProps{ //I + ComponentName + DescriptiveUsage = Interface Name
    username:string|undefined,
    userType:'admin' | 'moderator' | 'user' | 'guest';
}
const User:React.FC<IUserOwnProps>= ({username,userType}) =>{
    return (
        <div className="App">
          Hi
        </div>
      );
    
}


export default User; 
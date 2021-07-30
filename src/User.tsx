import React from 'react';
interface IUserOwnProps{ //I + ComponentName + DescriptiveUsage = Interface Name
    username:string|undefined,
    userType:'admin' | 'moderator' | 'user' | 'guest';
}
const User:React.FC<IUserOwnProps>= ({username,userType}): JSX.Element =>{
    return (
        <div className="App">
          Hi, {username ? username : 'Mysterious Entity'}, your user type is {username ? userType : 'irrelevant because I do not know you'}.
        </div>
      );
    
}


export default User; 
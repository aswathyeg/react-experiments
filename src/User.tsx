import React, { useState } from 'react';

interface IUserOwnProps{ //I + ComponentName + DescriptiveUsage = Interface Name
    username:string|undefined,
    userType:'admin' | 'moderator' | 'user' | 'guest';
}

const User:React.FC<IUserOwnProps>= ({username,userType}): JSX.Element =>{
  const[time,setTime]=useState<Date>(()=>new Date(Date.now())) //added useState
    return (
        <div className="App">
          Hi, {username ? username : 'Mysterious Entity'}, your user type is 
          {username ? userType : 'irrelevant because I do not know you'}.
          <br></br>

          <p>{time.toUTCString()}</p>
        </div>
      );
    
}


export default User; 
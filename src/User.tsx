import React, { useState,ChangeEvent} from 'react';

interface IUserOwnProps{ //I + ComponentName + DescriptiveUsage = Interface Name
    username:string|undefined,
    userType:'admin' | 'moderator' | 'user' | 'guest';
}

const User:React.FC<IUserOwnProps>= ({username,userType}): JSX.Element =>{
  const[time,setTime]=useState<Date>(()=>new Date(Date.now())) //added useState
  const[message,setMessage]=useState<string>('');
  setInterval(()=>{
    setTime(new Date(Date.now()));
  },1000
    
  )
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };
    return (
        <div className="App">
          Hi, {username ? username : 'Mysterious Entity'}, your user type is 
          {username ? userType : 'irrelevant because I do not know you'}.
          <br></br>

          <p>{time.toUTCString()}</p>

          <input type='text'
          placeholder='Enter your message here'
          value={message}
          onChange={handleTextChange}>

          </input>
          Your message: {message}
        </div>
      );
    
}


export default User; 
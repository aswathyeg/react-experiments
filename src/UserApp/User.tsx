import React, { useState,ChangeEvent, useEffect} from 'react';
import { Link } from 'react-router-dom';

interface IUserOwnProps{ //I + ComponentName + DescriptiveUsage = Interface Name
    username:string|undefined,
    userType:'admin' | 'moderator' | 'user' | 'guest';
}

const User: React.FC<IUserOwnProps> = ({ userType, username }): JSX.Element => {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const [message, setMessage] = useState<string>('');

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [username]);

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
          <br></br>
          <Link to='/UserList'> User List</Link>
        </div>
      );
    
}


export default User; 
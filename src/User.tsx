import React from 'react';
interface IUserOwnProps{ //I + ComponentName + DescriptiveUsage = Interface Name
    username:string|undefined,
    userType:'admin' | 'moderator' | 'user' | 'guest';
}
function User<IUserOwnProps> () {
    return (
        <div className="App">
          Hi
        </div>
      );
    
}


export default User;
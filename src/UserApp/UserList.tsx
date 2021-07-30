import React from 'react';
import { Link } from 'react-router-dom';
interface IUserListOwnProps{

}
export const UserList:React.FC<IUserListOwnProps>=():JSX.Element=>{
    return(
        <div>
        
        <p>
                UserList
            </p>
            <Link
                to='/'
            >
                Home
            </Link>

        </div>
    )

}
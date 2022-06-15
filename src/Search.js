import axios from 'axios';
import  { useState, useEffect } from 'react';

const Search = () => {
   const [users,setUsers]=useState();
   const [search,setSearch]=useState("");

   useEffect(() => {
      const fetchUsers = async () => {
         try{
            const response = await axios.get("https://randomuser.me/api?results=200");
            setUsers(response.data.results);

         }
      catch{
         alert("User request failed");

      }  
      }
      fetchUsers();


      }, []);

      return (
         <div style={{ fontSize: 30, width: "20%", margin: "auto", paddingTop: 20 }}>
           <input
             value={search}
             placeholder="Search users"
             onChange={(e) => setSearch(e.target.value)}
           />
           {users ? (
             <div>
               {users
                 .filter((user) =>
                   `${user.name.first} ${user.name.last}`
                     .toLowerCase()
                     .startsWith(search.toLowerCase())
                 )
                 .map((user) => {
                   return (
                     <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
                   );
                 })}
             </div>
           ) : (
             <div />
           )}
         </div>
       );
     
 }
 
export default Search;

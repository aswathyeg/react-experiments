import React, { useState } from 'react';
import './App.css';

import KanbanBoard from './kanbanBoardFunctional/index.js';
import ChildToParent from './passingData/ChildToParent';

import ParentClass from './passingData/ParentClass';
import ParentFunction from './passingData/ChildtoParentFunction';
import Parent from './passingData/ChildtoParentFunction';
import ParentExpences from './Expences/ParentExpences';
import LoginComponent from './passingData/modules/login/LoginComponent';
import UserDetails from './passingData/modules/userDetails/UserDetails';
import ParentColor from './passingData/ChangeColor/ParentColor';
import FormsFunction from './passingData/FormsData/FormsFunction';
import AddUsers from './AgeProject/Users/AddUsers';
import Fetch from'./passingData/fetch/Fetch';
import Display from './passingData/display/Display';
// const title = "Kanban Board";

function App () {
  // const [userInfo,setUserInfo]= useState({});//to hold data from loginComponent
const [users,setUsers]= useState([]);

const handleUsers=(uName)=>{ //pass the value from child as an argument
  setUsers((prevList)=>{
    return(
      [...prevList,{username:uName}]
    )
  }
  

  )}
 
    return (
      <div>
        <Fetch onCallback={handleUsers}/>
        <Display userValue={users}/>
        </div>
    );
  //       <h3 className="outer">ChildToParent communication</h3>
  //       <LoginComponent onSetUserInfo={setUserInfo}/>
        
  //       {/* passing data to other child */}
  //      <UserDetails userIformation={userInfo}/> 
  //    
  
  }














// function App() {
  //const [state,setState]=useState("VOTE");
  // const [count,setCount]=useState(0);

  // const setSorted=(state)=>{
  //   setState(state);

  // }
  // const handleSort=()=>{
  
  // }
  // const expences = [
  //   {
  //     id: 1,
  //     item: 'flowers',
  //     date: new Date(2021, 5, 12)

  //   },
  //   {
  //     id: 2,
  //     item: 'pen',
  //     date: new Date(2021, 6, 11)

  //   },
  //   {
  //     id: 3,
  //     item: 'book',
  //     date: new Date(2021, 7, 10)

  //   }


  // ]
// const details=[
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   },
//   {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//       "street": "Douglas Extension",
//       "suite": "Suite 847",
//       "city": "McKenziehaven",
//       "zipcode": "59590-4157",
//       "geo": {
//         "lat": "-68.6102",
//         "lng": "-47.0653"
//       }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//       "name": "Romaguera-Jacobson",
//       "catchPhrase": "Face to face bifurcated interface",
//       "bs": "e-enable strategic applications"
//     }
//   },
//   {
//     "id": 4,
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "address": {
//       "street": "Hoeger Mall",
//       "suite": "Apt. 692",
//       "city": "South Elvis",
//       "zipcode": "53919-4257",
//       "geo": {
//         "lat": "29.4572",
//         "lng": "-164.2990"
//       }
//     },
//     "phone": "493-170-9623 x156",
//     "website": "kale.biz",
//     "company": {
//       "name": "Robel-Corkery",
//       "catchPhrase": "Multi-tiered zero tolerance productivity",
//       "bs": "transition cutting-edge web services"
//     }
//   },
//   {
//     "id": 5,
//     "name": "Chelsey Dietrich",
//     "username": "Kamren",
//     "email": "Lucio_Hettinger@annie.ca",
//     "address": {
//       "street": "Skiles Walks",
//       "suite": "Suite 351",
//       "city": "Roscoeview",
//       "zipcode": "33263",
//       "geo": {
//         "lat": "-31.8129",
//         "lng": "62.5342"
//       }
//     },
//     "phone": "(254)954-1289",
//     "website": "demarco.info",
//     "company": {
//       "name": "Keebler LLC",
//       "catchPhrase": "User-centric fault-tolerant solution",
//       "bs": "revolutionize end-to-end systems"
//     }
//   }
// ]



//   return (

    // < Card className="expencess">
    //   <NewExpence expenceId={expences[0].id}
    //     expenceItem={expences[0].item}
    //     expenceDate={expences[0].date}
    //   />
    //   <NewExpence expenceId={expences[1].id}
    //     expenceItem={expences[1].item}
    //     expenceDate={expences[1].date}
    //   />
    //   <NewExpence expenceId={expences[2].id}
    //     expenceItem={expences[2].item}
    //     expenceDate={expences[2].date}
    //   />
    // </ Card>
   
//     <div>
      
//       <DetailsStatic
//        address={details} 
//        current={count}
//        restart={()=>setCount(0)}
//        next={()=>setCount(count+1)}
//        prev={()=>setCount(count-1)}/>
//     </div>

//   )
// }

 export default App;
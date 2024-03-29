import React from "react";
import { useContext, useState, createContext } from "react";

// const UserContext=createContext();

// export default function ContextExample(){
//     const[name,setName]=useState("John")
//     return(
//         <UserContext.Provider value={name}>
//            <p>Hello{name}</p>
//            <Component2 />
//         </UserContext.Provider>
//     )
// }
// function Component2(){
//     return(
//         <div>
//             <h1>Component 2</h1>
//             <Component3 />

//             </div>
//     )
// }
// function Component3(){
//     return(
//         <div>
//             <h1>Component 3</h1>
//             <Component4 />

//             </div>
//     )
// }
// function Component4(){
//     return(
//         <div>
//             <h1>Component 4</h1>
//             <Component5/>

//             </div>
//     )
// }
// function Component5(){
//     const usr=useContext(UserContext)
//     return(
//         <div>
//             <h1>Component 5</h1>
//           <h1>Hello{usr} again</h1>

//             </div>
//     )
// }
const UserContext = createContext();
const Component1 = () => {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
};
const Component2 = () => {
  return (
    <div>
      <h1>Component2</h1>
      <Component3 />
    </div>
  );
};
const Component3 = () => {
  return (
    <div>
      <h1>Component3</h1>
      <Component4 />
    </div>
  );
};
const Component4 = () => {
  return (
    <div>
      <h1>Component4</h1>
      <Component5 />
    </div>
  );
};
const Component5 = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <h1>Component5</h1>
      <h1>Hello {name} again</h1>
    </div>
  );
};

export default Component1;

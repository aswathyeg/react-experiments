import {useContext} from 'react';
import './CodingPractice.css';

const Context=React.createContext(1);

function Child(props){
    return<GrandChild />

}
function GrandChild(props){
    const value=useContext(Context)
    return(
        <div>{value}</div>
    )
    
}

export default function CodingPractice(){

   
    return(
    
   <Context.Provider value={1}>
        <Child/>
        </Context.Provider>
        )
}

import React from 'react';
import './CodingPractice.css';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';


export default function CodingPractice(){

    const Home=()=>{
        return(
        <h2>Home</h2>
        )
    }
    const Page=()=>{
        return(
        <h2>Page</h2>
        )
    }
    return(
        
           <BrowserRouter>
           <div className="parentdiv">
<Link to="/">Home</Link>
<Link to="/page">page</Link>
<Route exact path="/" component={Home} />
<Route path="/page" component={Page} />

           </div>
           </BrowserRouter>
       
    )
}

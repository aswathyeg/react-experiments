import { Accordion } from '@material-ui/core';
import React from 'react';
import './App.css';
 import Login from './Login';
import SimpleAccordion from './SimpleAccordion';
import axios from 'axios';
interface IPost{
  userId: number;
    id?: number;
    title: string;
    body: string;
}
const defaultPosts:IPost[]=[];

 function App() {
  
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");
  React.useEffect(() => {
    axios
        .get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
          headers: {
            "Content-Type": "application/json"
          },
          
        }).then(response => {
          setPosts(response.data);
          setLoading(false);
        });;
        
    }, []);
    return(
      <div className="App">      
        {/* <Login/>      */}
        <SimpleAccordion />
     </div>
     
   );
    
  }

export default App;

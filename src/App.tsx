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
const defaultProps:IPost[]=[];

 function App() {
  
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultProps);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");
  React.useEffect(() => {
    axios
        .get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
          headers: {
            "Content-Type": "application/json"
          },
          timeout:1
          
        }).then(response => {
          setPosts(response.data);
          setLoading(false);
        }).catch(ex => {
          const error =
          ex.response.status === 404
            ? "Resource not found"
            : "An unexpected error has occurred";
          setError("Error");
          setLoading(false);
        });
        
    }, []);
    return(
      <div className="App">
      <ul className="posts">
        {posts.map((post) => (
         <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
         </li>
       ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
     
   );
    
  }

export default App;

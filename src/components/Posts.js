import React from 'react';
export default class Posts extends React.Component{
    render(){
        
        const{loading,posts}=this.props;
if(loading){
    
    <h2>Loading...</h2>
}

        return(
            <div >
               {posts.map(post=>(
                   <div key={post.id} className="alert alert-primary">
                       <h4 className="alert-heading">{post.title}</h4>
                       
                       <p>{post.body}</p>
                        </div>

               ))}
            </div>
        )
    }
}
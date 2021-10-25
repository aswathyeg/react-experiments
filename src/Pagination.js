import React from 'react';
import axios from 'axios';
export default class Pagination extends React.Component{
    constructor(props){
    super(props);
    this.state={
        posts:[],
        loading:false,
        currentPage:1,
        postsPerPage:5


    }
}
componentDidMount(){
    const getPosts=async()=>{
        this.setState({loading:true})
        const result=await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.setState({loading:false})
        // console.log(result.data)


    }
    getPosts();

}
render(){
    const{posts,loading,currentPage,postsPerPage}=this.state;
    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;
    const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);
    
    return(
        <div className="container">
            <h1 className="my-5 text-primary text-center">Pagination</h1>

        </div>
    )
}
}
import React from 'react';
export default class PaginationExample extends React.Component{
    render(){
        const{ postsPerPage,totalPosts}=this.props;
        const pageNumbers=[];
        for(let i=1;i<Math.ceil(totalPosts/postsPerPage);i++){
            pageNumbers.push(i);
        }
        return(
            <div>

            </div>
        )
    }
}
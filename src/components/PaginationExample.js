import React from 'react';
export default class PaginationExample extends React.Component{
    render(){
        const{ postsPerPage,totalPosts,paginate}=this.props;
        const pageNumbers=[];
        for(let i=1;i<Math.ceil(totalPosts/postsPerPage);i++){
            pageNumbers.push(i);
        }
        return(
            <div>
<nav>
    <ul className="pagination justify-content-center">

        <li className="page-item">
            <a className="page-link" href="#">Previous</a>

        </li>
        {pageNumbers.map(num=>(

            <li className="page-item" key={num}>
                <a onClick={()=>paginate(num)} href="#" className="page-link">
                    {num}
                </a>
            </li>
        ))}
        <li className="page-item">
            <a className="page-link" href="#">Next</a>

        </li>
    </ul>
</nav>
            </div>
        )
    }
}
import axios from "axios"
import React, { useEffect, useState } from "react"
import { MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

export default function Table(){
    const [list,setList]=useState<any[]>([]);

  const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
       
      };


    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/todos')
        // .then(res=>{
        //     console.log(res);

        // })

        fetch('https://jsonplaceholder.typicode.com/todos',requestOptions)
       .then(async response=>{
        const data=await response.json();
        console.log(data);
        if(response.ok){
          console.log("render classes")
          setList(data)
          console.log("list:", list)
      }
      else {
          console.log("failed rendering classes")
      }
     
})
.catch(error => {
    console.error('There was an error!', error);
  });

    },[])
    return(
        <div>
<MDBTable>

<MDBTableHead className="tableHead">

<tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
         
        </tr>
</MDBTableHead>


<MDBTableBody>
  {list.map(item=>{return(
    <tr>
    <td>{item.userId}</td>
    <td>{item.id}</td>
    <td>{item.title}</td>
    <td>{item.completed}</td>
    
  </tr>

  )

  })}
  </MDBTableBody>
      
      </MDBTable>
        
          </div>
      )
  
  }
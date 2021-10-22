import axios from "axios"
import { useEffect, useState } from "react"
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function Table(){
    const [list,setList]=useState({})

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
        setList(data.data)   
     
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
    <th>Class_id</th>
    <th>Standard</th>
    <th>Division</th>
    <th>Strength</th>
    <th>Class_teacher_id</th>
    <th>Class_teacher_name</th>
  </tr>
</MDBTableHead>


<MDBTableBody>

        </div>
    )
}
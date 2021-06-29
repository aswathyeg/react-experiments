
//eg to how functional components handling state

import React, { useState } from 'react'

function Classroom (props :any){
    let[studentsCount,setStudentCount]=useState(0);//use React hooks to handle state.

    const addStudent=()=>{
        setStudentCount(++studentsCount)
    }
    return(
        <div>
            <p>Number of students in classroom:{studentsCount}</p>
            <button onClick={addStudent}>Add Student</button>

            
        </div>
    )
}
export default Classroom;
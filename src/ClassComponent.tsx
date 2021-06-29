import React from 'react';
interface Iprops{
   
}
interface Istate{
    studentCount:number;
    
}
class StudentDetails extends React.Component<Iprops,Istate>{
    constructor(props:any){
        super(props)
       this. state={ studentCount:0};
       this.addStudent=this.addStudent.bind(this);
       
    }
    addStudent(){
        this.setState((prevState)=>{
        return{
            studentCount:  prevState.studentCount+1 }
        }
        )
       
        }
      
    
    render(){
        return(
            <div>
<p>Number of students:{this.state.studentCount} </p>
<button onClick={this.addStudent}>Add Student</button>
            </div>
        )
    }
}
export default StudentDetails;
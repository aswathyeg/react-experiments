import React from "react";
import { MDBBtn,MDBInput } from "mdbreact";

const InputPage = () => {
 const  handleclick=()=>{

  }
  return (<div>
   
    <MDBInput label="Username" outline icon="envelope" />
    
    
    <MDBInput label="E-mail address" outline icon="envelope" />
    <MDBBtn onClick={handleclick} >Submit</MDBBtn>
    
    </div>
    
  );
}

export default InputPage;
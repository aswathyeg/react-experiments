import React, { Component, Fragment } from "react";
//import PropsState from "./PropsState";
//import { useAlert } from "react-alert";
interface Props {
  // textContent:string,
  // newValue:string

}
interface State{
  textContent:string,
  newValue:string

}


 class Homee extends Component<Props, State >{
   constructor (props:Props){
     super(props);
     this.state={
       textContent:'',
       newValue:''
     }
   }
   textChange=(e)=>{
   this.setState({textContent:e.target.value})

  }
  clickhHere= () =>{
  alert( this.state.textContent);
  
  }
  render(){
  return(
    <div>
      <input type="text" onChange={this.textChange}></input>
      <button onClick={this.clickhHere}>click</button> 
      {/* <p>{this.state.textContent}</p>  */}

      {/* <p>{this.state.newValue}</p> */}
     
     </div>
  )
}
 }
 export default Homee;

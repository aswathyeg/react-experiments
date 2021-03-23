import React from 'react'

  class NumberDescriber extends React.Component{
      constructor(props){
          super(props);
          this.state={
            a:0 ,
            description:''
          }
this.enterNumber=this.enterNumber.bind(this);
      }
      enterNumber=(e)=>{
          this.setState({a:e.target.value})
        if((this.state.a)%2==0){
            this.state.description=<strong>Even</strong>
           
        }
       
        else{
            this.state.description=<strong>Odd</strong>
            
        }
        

      }
    
    
render(){
    return(
        <div>
            <input type="text" placeholder="enter number" onChange={this.enterNumber}></input>
            {this.state.a} is an {this.state.description} number
        </div>
    )
}
  }
  export default NumberDescriber;

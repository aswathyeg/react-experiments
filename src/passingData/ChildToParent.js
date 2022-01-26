import React from 'react';

export default class ChildToParent extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            data:null //initialise data
        }
    }
    parentCallback=(childData)=>{
        this.setState({data:childData})//update the data from child
         

    }
    render(){
        
        return(
            <div>
                <Child parentCallback={this.onTrigger}/>
            </div>
    
        )
    }
    
}
class Child extends React.Component{
   render(){
    onTrigger=(event)=>{
        this.props.parentCallback("Data from child");
        event.preventDefault();    
    }
       return(
           <div>
               <form onSubmit={this.onTrigger}>
                   <input type="text"></input>
               </form>

           </div>
       )
   }
    }


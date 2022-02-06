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
        const{data}=this.state;
        
        return(
            <div>
                <Child onParentCallback={this.parentCallback}/>
                {data}
            </div>
    
        )
    }
    
}
class Child extends React.Component{
    onTrigger=(event)=>{
        this.props.onParentCallback("Data from child");
        event.preventDefault();    
    }
     
   render(){
       
      return(
           <div>
               <form onSubmit={this.onTrigger}>
                   <input type="submit" value="Submit"></input>
               </form>

           </div>
       )
   }
    }


import React from 'react';
interface state{

}
interface prop{
    number:number;
    
}
class AddMeClass extends React.Component<state,prop>{
    constructor(prop){
        super(prop);
        this.state={
            number:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
     increment=()=>{
         this.setState({
             number:this.state.number+1
         })

    } 
    decrement(){
        this.setState({
            number:this.state.number-1})
    }
    render(){
        return(
            <div>
                <p>Current value={this.state.number}</p>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }

}
export default AddMeClass;
import React from 'react'

interface Props{
   
}
 
interface State{
    counterValue:number;
}



class NoErrorBoundaries extends React.Component<Props, State>{
    constructor(props:Props){
        super(props);
        this.state = {
          counterValue: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter(){
        
        this.setState({
            counterValue:this.state.counterValue+1

        })
        }
      
render(){
    if(this.state.counterValue === 2){
        throw new Error('Crashed');
      }
    return(
        <div>
<button onClick={this.incrementCounter}>Increment Value</button>
<p>CurrentValue:{this.state.counterValue}</p>

       </div>
        )
    
}
}
export default NoErrorBoundaries;
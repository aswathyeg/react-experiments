import { count } from 'console';
import React from 'react';
interface Props{

}
interface State{
    count:number
}
export default class ClassLifecycle extends React.Component<Props,State>{
    constructor(props){
        super(props);
        this.state={
count:0
        }
    }
    //lifecyclemethods
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
      }
      componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
      }

     handleClick=()=>{
        this.setState({count:this.state.count+1})
    
     }
    render(){
        return(
            <div>
<p>
    you have clicked :{this.state.count}
</p>
<button onClick={ this.handleClick}>
click
</button>
            </div>
        )
    }
}
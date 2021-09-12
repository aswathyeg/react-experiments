import React from 'react';
interface Props{

}
interface State{
    date:Date
}
export default class LifeCycleMethods extends React.Component<Props,State>{
    timerID: number;
    constructor(props){
        super(props);
        this.state={
            date:new Date(),
            
        };
    }
    componentDidMount(){
        this.timerID = window.setInterval(
            ()=>this.tick(),1000
        );

    }
    componentWillUnmount(){
       window.clearInterval(this.timerID)

    }
tick(){
    this.setState({date:new Date()})

}
    render(){
        return(
            <div>
                <h1>What is the time now?</h1>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }

}
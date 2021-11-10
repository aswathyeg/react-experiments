import React from 'react';
export default class Mounting extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:"red"
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:"yellow"})
        },1000)
       
    }
    render(){
        return(
            <div>
                <p>{this.state.color}</p>
            </div>
        )
    }
}
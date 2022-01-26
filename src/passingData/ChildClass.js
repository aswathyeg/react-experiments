import React from 'react';
export default class ChildClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.dataFromParent
        }
    }
    render(){
        const {data}=this.state;
        return(
            <div>
                {data}
            </div>
        )
    }
}
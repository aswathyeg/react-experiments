
//passing data from parent to child via props
import React from 'react';
import ChildClass from './ChildClass';
export default class ParentClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:'Data from parent'

        }
    }
    render(){
        const {data}=this.state;

        return(
            <div>
<ChildClass dataFromParent={data}/>
            </div>
        )
    }
}
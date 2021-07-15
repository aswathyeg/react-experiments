
//eg to how to avoid rerendering of components
import React from 'react'
import Child from './Child'; 

class Parent extends React.Component{
    state={messageDisplayed:false};
    componentDidMount(){
        this.setState({messageDisplayed:true})
    }

    render(){
        console.log("Parent is getting rendered");
        return(
            <div>
<Child />
            </div>
        )
    }
}
export default Parent;
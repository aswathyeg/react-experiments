import React, { Component } from 'react';

export default class ChildToParent extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:null
        }
       
    }
    callbackFunction=(childData)=>{

        this.setState({data:childData});

    }
    render(){
const {data}=this.state;
        return(
            <div>
                <Child onCallbackfunction={this.callbackFunction}/>
                {data}
            </div>
        )
    }
}
class Child extends React.Component {
    onTrigger=(e)=>{

        this.props.onCallbackfunction("ChildData");
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onTrigger}>


                    <input type="submit" value="Submit">

                    </input>
                </form>
                
            </div>
        )
    }

}



import React from 'react';

interface Props {

}
interface State {
    message: string
}
class Child extends React.Component<Props, State>{

    constructor(props: any) {
        super(props);
        this.state = {
            message: "This is Vivek"
        };
    }
    shouldComponentUpdate(){
        console.log("Does not getting rendered")
        return false;

    } //Prevent re-renders 
    render() {
        console.log("Child is getting rendered")
        return (
            <div>
                <p>{this.state.message}</p>
            </div>
        )
    }

}
export default Child;
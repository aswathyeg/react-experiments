import React from 'react';

interface Props {

}
interface State {
    count: number

}

class IncrementDecrementClass extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })

    }

    decrement() {
        this.setState({
            count: this.state.count - 1

        })
        

    }

    render() {
        return (
            <div>
                <p>Current Value:{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
export default IncrementDecrementClass;
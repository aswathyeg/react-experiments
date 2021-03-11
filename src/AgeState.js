import React from 'react'
class AgeState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0,
        }
        this.checkAge = this.checkAge.bind(this);
    }
    checkAge = (e) => {
        this.setState({ age: e.target.value })

        //(newage>=18?'You are eligible':'you are not eligible')

    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.checkAge} placeholder="Enter your Age"></input>
                <button>Click to know eligible to drive</button>
                <p>content:{this.state.age}</p>
                {(this.state.age) >= 18 ? 'You are eligible' : 'You are not eligible'}
            </div>
        );

    }
}
export default AgeState;
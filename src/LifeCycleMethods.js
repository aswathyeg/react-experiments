import React from "react";
import Counter from "./Counter";
class LifeCycleMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount runs");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount runs");
  }
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  componentDidUpdate() {
    console.log("componentDidUpdate runs");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Sum</button>
        <Counter number={this.state.number} />
      </div>
    );
  }
}
export default LifeCycleMethods;

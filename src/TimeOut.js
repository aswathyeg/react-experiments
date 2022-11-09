import { Component } from "react";

export default class TimeOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date(),
    };
  }
  componentDidMount() {
    this.intervel = setInterval(() => {
      this.setState({ time: Date() }, 1000);
    });
  }
  componentWillUnmount() {
    clearTimeout(this.intervel);
  }
  render() {
    return;
    <div>
      <h1>Current time: {this.state.time}</h1>
    </div>;
  }
}

import { Component } from "react";

interface IState {
  count: number;
}

export default class LifeCycle extends Component<object, IState> {
  interval?: ReturnType<typeof setInterval>;

  constructor(props: object) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    // // Never set the state inside of the render function because it will cause infinite loops
    // setInterval(() => {
    //   this.setState((prevState) => ({ count: prevState.count + 1 }));
    // }, 1000);
    console.log("render");
    return <div>Count: {this.state.count}</div>;
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 10000);
  }

  componentDidUpdate(
    _prevProps: Readonly<object>,
    prevState: Readonly<IState>
  ) {
    console.log("componentDidUpdate", prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }
}

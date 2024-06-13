import { Component } from "react";

interface IState {
  count: number;
}

// class "State" accepts props of type object / IState
// I don't pass props to state thguh? Why dp i need these?

// React class components can take two type parameters:
// Component<P, S>
// P (Props): The type of the props that the component expects.
// S (State): The type of the state that the component maintains.

export default class State extends Component<object, IState> {
  constructor(props: object) {
    super(props);

    // Define state as an object
    this.state = {
      count: 0,
    };

    // if your functions use the this keyword, bind the this keyword!
    this.increment = this.increment.bind(this);
  }

  increment(): void {
    // We are using the "this" keyword.
    console.log(this); // Function has its own "this" context.
    // We have to bind() the increment() function so "this" refers to the State class

    this.setState((prevState) => ({ count: prevState.count + 1 })); // Right
    // this.setState({ count: this.state.count + 1 }); // Wrong
  }

  // You don't need to bind arrow functions due to lexical scoping
  incrementArrow = (): void => {
    console.log(this);
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <>
        <h2>State + Event Binding</h2>
        <div>Count: {this.state.count}</div>
        {/* we bind the function definition to the eventhandler, not the function invokation */}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementArrow}>incrementArrow</button>
      </>
    );
  }
}

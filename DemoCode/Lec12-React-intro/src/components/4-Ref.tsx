import { Component, createRef } from "react";

export default class Ref extends Component<object, object> {
  // These are "Instance Properties"
  // They're essentially a variable that is part of a class instance
  yourRef?: HTMLInputElement; // Callback ref (Bad)
  myRef: React.RefObject<HTMLInputElement> = createRef(); // createRef() (Good)

  handleCallbackRefChange = () => {
    console.log(this.yourRef); // Access Instance Properties with "this"
    console.log(this.yourRef?.value);
  };

  handleCreateRefChange = () => {
    console.log(this.myRef); // an object that has a "current" property
    console.log(this.myRef.current?.value);
  };

  render() {
    return (
      <>
        <h2>Refs</h2>
        <input
          ref={(node) => (this.yourRef = node!)} // Callback Ref w/ TS non-null assertion
          type="text"
          placeholder="Callback Ref"
          onChange={this.handleCallbackRefChange}
        />
        <input
          ref={this.myRef} // createRef()
          type="text"
          placeholder="React.createRef()"
          onChange={this.handleCreateRefChange}
        />
      </>
    );
  }
}

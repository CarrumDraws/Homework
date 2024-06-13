import { Component, createRef } from 'react';

export default class Uncontrolled extends Component<object, object> {
  inputRef: React.RefObject<HTMLInputElement> = createRef();

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.inputRef.current?.value);
    this.inputRef.current!.value = '';
  };

  render() {
    return (
      <>
        <h2>Uncontrolled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={this.inputRef} />
          <button type='submit'>Submit</button>
        </form>
      </>
    );
  }
}

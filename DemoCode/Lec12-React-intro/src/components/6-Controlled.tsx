import { Component } from 'react';

interface IState {
  input: string;
}

export default class Controlled extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = { input: '' };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state.input);
    this.setState({ input: '' }); // reset the input value
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  render() {
    return (
      <>
        <h2>Controlled Component</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </>
    );
  }
}

import { Component } from "react";

interface IState {
  name: string;
  email: string;
  password: string;
}

export default class ReusableChangeHandler extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);
  };

  // Reusable handleChange! Just destructure the name and value...
  // ...and set it in state.
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  };

  render() {
    return (
      <>
        <h2>Reusable Change Handler</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

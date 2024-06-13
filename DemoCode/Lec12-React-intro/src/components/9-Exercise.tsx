import { Component } from "react";

interface IState {
  fruits: string[];
  newFruit: string;
}

// Controlled Component
export default class Exercise extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      fruits: ["apple", "banana", "orange"],
      newFruit: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState((prevState) => ({
      fruits: [...prevState.fruits, prevState.newFruit],
      newFruit: "",
    }));
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ newFruit: value });
  };

  handleDelete = (fruit: string) => {
    this.setState((prevState) => ({
      fruits: prevState.fruits.filter((f) => f !== fruit),
    }));
  };

  render() {
    return (
      <>
        <h2>Exercise</h2>
        <ul>
          {this.state.fruits.map((fruit) => (
            <li key={fruit} onClick={() => this.handleDelete(fruit)}>
              {fruit}
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newFruit}
            onChange={this.handleChange}
          />
          <button type="submit">Add Fruit</button>
        </form>
      </>
    );
  }
}

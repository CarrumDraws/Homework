import { Component } from "react";
import "./App.css";

interface S {
  products: product[];
  newProduct: product;
}

interface product {
  name: string;
  category: string;
  price: string;
}

// Controlled Component
export default class Exercise extends Component<object, S> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: [
        { name: "M&M", category: "Snacks", price: "$1.99" },
        { name: "Table", category: "Furnature", price: "$199" },
        { name: "Kale", category: "Vegetables", price: "$2.49" },
      ],
      newProduct: { name: "", category: "", price: "" },
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState((prevState) => ({
      products: [...prevState.products, prevState.newProduct],
      newProduct: { name: "", category: "", price: "" },
    }));
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newProduct: { ...prevState.newProduct, [name]: value },
    }));
  };

  handleDelete = (productName: string) => {
    this.setState((prevState) => ({
      products: prevState.products.filter(
        (product) => product.name !== productName
      ),
    }));
  };

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => this.handleDelete(product.name)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />

        <h3>Add Product</h3>
        <form id="addProduct" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.newProduct.name}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="category">Product Category:</label>
          <input
            id="category"
            type="text"
            name="category"
            value={this.state.newProduct.category}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="price">Product Price:</label>
          <input
            id="price"
            type="text"
            name="price"
            value={this.state.newProduct.price}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add New</button>
        </form>
      </>
    );
  }
}

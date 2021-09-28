// Episode 49 Not-Seen

import React, { Component } from "react";
import ProductList from "./components/ProductList/ProductList.jsx";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "React.JS",
        price: 100,
        quantity: 1,
        defTitle: "React.JS",
      },
      {
        id: 2,
        title: "Node.JS",
        price: 70,
        quantity: 2,
        defTitle: "Node.JS",
      },
      {
        id: 3,
        title: "JavaScript",
        price: 50,
        quantity: 3,
        defTitle: "JavaScript",
      },
    ],
    show: true,
  };

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter(
      (product) => product.id !== id
    );
    this.setState({ products: filteredProducts });
  };

  incerementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity <= 0) {
      product.quantity = 1;
    } else {
      product.quantity++;
    }
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  decerementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity <= 1) {
      const filteredProducts = this.state.products.filter(
        (product) => product.id !== id
      );
      this.setState({ products: filteredProducts });
    } else {
      product.quantity--;
      const products = [...this.state.products];
      products[index] = product;
      this.setState({ products });
    }
  };

  changeHandler = (event, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (event.target.value == "") {
      product.title = this.state.products[id - 1].defTitle;
    } else {
      product.title = event.target.value;
    }
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  render() {
    return (
      <div className="container" id="title">
        <h1 id="titleApp">Shopping App</h1>
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onIncerement={this.incerementHandler}
          onDecerement={this.decerementHandler}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };

  inputHandler = (e) => {
    this.setState({ name: e.target.value });
  };

  clickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Docuemnt title updating");
      document.title = `Clicked ${this.state.count} times`;
    }

    if (prevState.name !== this.state.name) {
      console.log("Input value changed");
      document.title = this.state.name;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.inputHandler}
          id=""
          value={this.state.name}
        />
        <button onClick={this.clickHandler}>Count : {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;

import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { snacks } from "./snacks";
import "tachyons";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      snacks: snacks,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.snacks.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Snacks from TYT's snacks</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList snacks={filteredRobots} />
      </div>
    );
  }
}

export default App;

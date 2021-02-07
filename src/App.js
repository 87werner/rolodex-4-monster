import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component.js";
import SearchBox from './components/search-box/search-boz.component.js'
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this) // if you don't use arrow function.
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }) // Has lexical scoping, this. is bind to app Component where it is defined.  
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Werner's Monster Rolodex</h1>
        <SearchBox 
         type="search"
         placeholder="search monsters"
         handleChange={this.handleChange}
        
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

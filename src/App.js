import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(data => this.setState({people: data.results}))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter(person => 
      person.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
      <div className="App">
        <h1 className='sitename'>Star Wars Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} placeholder='search Star Wars characters' />
        <CardList people={filteredPeople} />
      </div>
    );
  }
}

export default App;

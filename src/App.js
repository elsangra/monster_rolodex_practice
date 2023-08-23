import React, { Component } from 'react';
import './App.css';
import CardList from "./componenets/card-list/card-list.component";
import SearchBoxComponent from "./componenets/search-box/search-box.component";
import SearchBox from "./componenets/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster :[],
      searchField:''
    };
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()) .then ((users) => this.setState(() =>{
      return{monster:users}
    } ))
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    })
  }

  render() {

    const {monster,searchField}=this.state;
    const { onSearchChange }=this;

    const filteredMonster=monster.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes( searchField );
    });
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
            className='monster-search-box'
            onChangeHandler={onSearchChange}
            placeholder='Search Monster'
        />
        <CardList monster={filteredMonster}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Header from './components/Header';
import pokeFetch from './pokeFetch';
import PokemonCard from './components/PokemonCard';
import './App.css';

export class App extends Component {
  state = {
    id: 132,
    name: 'ditto',
    weight: 40,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    species: {
      name: 'ditto',
    },
    types: {
      type: {
        name: 'normal',
      },
    }
  }

  handleInput = (evt) => {
    this.setState({
      name: evt.target.value
    });
  }

  logValue = async (event) => {
    event.preventDefault();
    const pokemon = await pokeFetch(this.state.name);
    const {id, name, weight, sprites, species, types } = pokemon;
    const { front_default } = sprites;
    this.setState({id, name, weight, front_default, species, types})
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <form className="search-form">
          <input className="search-input" onChange={this.handleInput} /> 
          <button className="search-btn" onClick={this.logValue}>Buscar</button> 
        </form>
        <PokemonCard 
          className={`${this.state.name}`} 
          name={this.state.species.name} 
          weight={this.state.weight} 
          sprites={this.state.front_default} 
        />
      </div> 
    )
  }
}


export default App
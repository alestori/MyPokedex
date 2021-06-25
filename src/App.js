import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Header from './components/Header';
import pokeFetch from './pokeFetch';
import PokemonCard from './components/PokemonCard';
import Button from './components/Button';
import Input from './components/Input';
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
      0: {
        type: {
          name: 'normal',
      }
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
    try {
      const pokemon = await pokeFetch(this.state.name);
      const {id, name, weight, sprites, species, types } = pokemon;
      const { front_default } = sprites;
      this.setState({id, name, weight, front_default, species, types})
    } catch (e) {
      console.log(e);
      return;
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <form className="search-form" onSubmit={this.logValue}>
          {/* <input className="search-input" onChange={this.handleInput} />  */}
          <Input 
            onChange={this.handleInput} 
            className="search-input" 
            name="input"
            inputLabel="Pokémon"
          />
          {/* <button className="search-btn">Search</button>  */}
          <Button type="submit" className="search-btn" name="Search"/>
        </form>
        <PokemonCard 
          id={this.state.id}
          className={`${this.state.name}`} 
          name={this.state.species.name} 
          weight={this.state.weight} 
          sprites={this.state.front_default} 
          types={this.state.types}
        />
      </div> 
    )
  }
}


export default App
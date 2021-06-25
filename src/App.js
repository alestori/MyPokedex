import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Header from './components/Header';
import pokeFetch from './components/pokeFetch';
import PokemonCard from './components/PokemonCard';

export class App extends Component {
  state = {
    name: 'ditto',
    weight: 40,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
  }

  handleInput = (evt) => {
    this.setState({
      name: evt.target.value
    });
  }

  logValue = async (event) => {
    event.preventDefault();
    const pokemon = await pokeFetch(this.state.name);
    const {name, weight, sprites } = pokemon;
    const { front_default } = sprites;
    this.setState({name, weight, front_default})
    console.log(this.state);
  }
  
  render() {

    return (
      <div>
        <Header />
        <form>
          <input className="search-input" onChange={this.handleInput} /> 
          <button className="search-btn" onClick={this.logValue}>Buscar</button> 
        </form>
        <PokemonCard name={this.state.name} weight={this.state.weight} sprites={this.state.front_default} />
      </div> 
    )
  }
}


export default App
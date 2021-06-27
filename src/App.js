import React, { Component } from 'react'
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import Form from './components/Form';
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

  handleCallback = (data) => {
    this.setState({
      id: data.id,
      name: data.name,
      weight: data.weight,
      front_default: data.front_default,
      species: data.species,
      types: data.types,
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Form 
          data-testid="form-test"
          className="search-form"
          parentCallback={this.handleCallback} />
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
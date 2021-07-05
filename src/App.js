import React, { Component } from 'react'
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import Form from './components/Form';
import './App.css';
import pokeFetch from './pokeFetch';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    }
  }

  componentDidUpdate() {
    console.log('app update')
  }

  componentDidMount() {
    console.log('app mount');
    this.setState(
      { loading: true },
      async () => {
        const pokemon = await pokeFetch(`ditto`);
        const {id, name, weight, sprites, species, types } = pokemon;
        const { front_default } = sprites;
        this.setState({id, name, weight, front_default, species, types, loading: false})  
      }
    )
  }

  handleCallback = (data) => {
    this.setState(
      {loading: true},
      async () => {
        const pokemon = await pokeFetch(data.name);
        const {id, name, weight, sprites, species, types } = pokemon;
        const { front_default } = sprites;
        this.setState({id, name, weight, front_default, species, types, loading: false});
      }
      )
  }
  
  render() {
    const loadingSpan = <span className="loading">Loading...</span>
    const {loading} = this.state;
    return (
      <div className="App">
        <Header />
        <Form 
          data-testid="form-test"
          className="search-form"
          parentCallback={this.handleCallback} />
        {loading ? loadingSpan : 
        <PokemonCard 
          id={this.state.id}
          className={`${this.state.name}`} 
          name={this.state.species.name} 
          weight={this.state.weight} 
          sprites={this.state.front_default} 
          types={this.state.types}
        />}
      </div> 
    )
  }
}


export default App
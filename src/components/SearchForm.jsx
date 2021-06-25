import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Button from './Button';
// import pokeFetcher from './PokeFetch';

export class SearchForm extends Component {
  state = {
    name: '',
  }

  handleInput = (evt) => this.setState({ name: evt.target.value });

  pokeFetcher = async (poke) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    const pokemon = await response.json();
    console.log(pokemon);
  }

  render() {
    const {name} = this.state;
    return (
      <form>
        <SearchInput name="search-input" className="search-input" />
        <Button text="Buscar" className="search-btn" onClick={this.pokeFetcher(name)}/>
      </form>
    )
  }
}

export default SearchForm;

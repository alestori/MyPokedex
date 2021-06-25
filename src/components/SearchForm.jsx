import React, { Component } from 'react';
import pokeFetcher from './PokeFetch';

export class SearchForm extends Component {
  state = {
    name: '',
  }

  handleInput = (evt) => {
    this.setState({
     name: evt.target.value 
    });
    console.log(this.state.name);
  }

  logValue = (event) => {
    event.preventDefault();
    console.log(pokeFetcher(this.state.name));
  }

  render() {
    return (
      <form>
        <input name="search-input" className="search-input" onChange={this.handleInput} />
        <button text="Buscar" className="search-btn" onClick={this.logValue}>Buscar</button>
      </form>
    )
  }
}

export default SearchForm;

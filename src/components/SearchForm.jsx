import React, { Component } from 'react';
import pokeFetch from './pokeFetch';

export class SearchForm extends Component {
  state = {
    name: 'ditto',
  }

  handleInput = (evt) => {
    this.setState({
     name: evt.target.value 
    });
  }

  logValue = async (event) => {
    event.preventDefault();
    const {name, weight, sprites} = await pokeFetch(this.state.name);
    console.log(name);
    console.log(weight);
    console.log(sprites.front_default);
  }

  render() {
    return (
      <form>
        <input className="search-input" onChange={this.handleInput} />
        <button className="search-btn" onClick={this.logValue}>Buscar</button>
      </form>
    )
  }
}

export default SearchForm;

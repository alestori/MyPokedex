import React, { Component } from 'react';
import SearchForm from './SearchForm';

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>Pokédex</h1>
        <SearchForm />
      </header>
    )
  }
}

export default Header

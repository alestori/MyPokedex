import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Button from './Button';

export class SearchForm extends Component {
  render() {
    return (
      <div>
        <SearchInput />
        <Button text="Buscar" className="search-btn" />
      </div>
    )
  }
}

export default SearchForm

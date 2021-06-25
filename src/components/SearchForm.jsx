import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Button from './Button';
import pokeFetcher from './PokeFetch';

export class SearchForm extends Component {

  render() {
    return (
      <div>
        <SearchInput name="search-input" className="search-input" />
        <Button text="Buscar" className="search-btn" onClick={pokeFetcher}/>
      </div>
    )
  }
}

export default SearchForm

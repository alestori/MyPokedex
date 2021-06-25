import React, { Component } from 'react';

export class SearchInput extends Component {
  
  render() {
    const { name, className } = this.props;

    return (
      <input name={name} placeholder="Pokémon" className={className} />
      )
    }
  }

export default SearchInput; 
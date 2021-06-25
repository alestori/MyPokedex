import React, { Component } from 'react';

export class SearchInput extends Component {
  constructor(props) {
    super();
    const { name } = props;
    this.state = {
      [name]: '',
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  render() {
    const { name, className, onChange } = this.props;

    return (
      <input name={name} placeholder="Pokémon" className={className} onChange={this.handleChange} />
      )
    }
  }

export default SearchInput

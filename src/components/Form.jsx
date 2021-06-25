import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import pokeFetch from '../pokeFetch';

export class Form extends Component {
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

  handleInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  logValue = async () => {
    try {
      const pokemon = await pokeFetch(this.state.name);
      const {id, name, weight, sprites, species, types } = pokemon;
      const { front_default } = sprites;
      this.setState({id, name, weight, front_default, species, types})
    } catch (e) {
      console.log(e);
      return;
    }
  }

  onTrigger = async (e) => {
    e.preventDefault();
    await this.logValue();
    this.props.parentCallback(this.state);
  }

  render() {
    const { className, testid } = this.props;
    return (
      <form onSubmit={this.onTrigger} className={className} data-testid={testid}>
       <Input 
            onChange={this.handleInput} 
            className="search-input" 
            name="inputform"
            inputLabel="Pokémon" />
        <Button type="submit" className="search-btn" name="Search"/>
      </form>
    )
  }
}

export default Form;

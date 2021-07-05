import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import pokeFetch from '../pokeFetch';

export class Form extends Component {
  state = {
    error: {
      error: [],
      errormsg: '',
    },
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
    const value = e.target.value;
    this.setState({
      name: value.toLowerCase(),
    });
  }

  logValue = async () => {
    try {
      const pokemon = await pokeFetch(this.state.name);
      const {id, name, weight, sprites, species, types } = pokemon;
      const { front_default } = sprites;
      this.setState({id, name, weight, front_default, species, types, 
        error: { 
          error: [],
          errormsg: "",
        }
      });
    } catch (e) {
      const pokemon = await pokeFetch('ditto');
      const {id, name, weight, species, types, sprites} = pokemon;
      const {front_default } = sprites;
      this.setState({id, name, weight, front_default, species, types,
        error: {
          error: [].push(e),
          errormsg: "Couldn't find that Pokémon. But here's one that could be it...maybe?"
        }
      })
    }
  }

  onTrigger = async (e) => {
    e.preventDefault();
    await this.logValue();
    this.props.parentCallback(this.state);
  }

  render() {
    const { className } = this.props;
    return (
      <form onSubmit={this.onTrigger} className={className} data-testid={this.props['data-testid']}>
       <Input
          labelClassName="input-label"
          onChange={this.handleInput} 
          className="search-input" 
          name="inputform"
          inputLabel="Pokémon" />
        <Button type="submit" className="search-btn" name="Search"/>
        { this.state.error.errormsg && <p className="error">{ this.state.error.errormsg }</p> }
      </form>
    )
  }
}

export default Form;

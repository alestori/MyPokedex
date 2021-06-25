import React, { Component } from 'react'

export class PokemonCard extends Component {
  render() {
    const {name, weight, sprites } = this.props
    return (
      <div>
        <h2>{name}</h2>
        <p>{weight}</p>
        <img src={sprites} alt="sprite" />
      </div>
    )
  }
}

export default PokemonCard;

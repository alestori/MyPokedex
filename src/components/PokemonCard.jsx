import React, { Component } from 'react'

export class PokemonCard extends Component {
  render() {
    const {name, weight, sprites, className } = this.props
    return (
      <div className={`${className} poke-card`}>
        <h2 className="poke-name">{name}</h2>
        <p className="poke-weight">{weight}</p>
        <img className="poke-sprite" src={sprites} alt="sprite" />
      </div>
    )
  }
}

export default PokemonCard;

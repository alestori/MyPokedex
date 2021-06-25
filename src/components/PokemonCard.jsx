import React, { Component } from 'react';
import Type from './Type';

export class PokemonCard extends Component {
  render() {
    console.log(this.props);
    const {key, name, weight, sprites, className, types } = this.props;
    console.log(key);
    const typeObj = Object.values(types);
    return (
      <div className={`${className} poke-card`}>
        <div className="poke-info">
          <h2 className="poke-name">{name}</h2>
          <div className="poke-sub-info">
            <label>Type:</label>
              {typeObj.map((type) => <Type key={key} type={type.type.name} />)}
            <label>Weight:</label>
              <p className="poke-weight">{weight}lb</p>
          </div>
        </div>
        <img className="poke-sprite" src={sprites} alt="sprite" />
      </div>
    )
  }
}

export default PokemonCard;

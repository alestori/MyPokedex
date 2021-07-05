import React, { Component } from 'react';
import Type from './Type';

export class PokemonCard extends Component {
  // constructor(props) {
  //   super(props);
  //   const {name, weight, sprites, className, types } = props;
  //   const typeObj = Object.values(types);
  //   this.state = {
  //     name, weight, sprites, className, typeObj
  //   }
  // }

  componentDidMount() {
    console.log('mount card');
  }

  componentDidUpdate() {
    console.log('update card');
  }

  render() {
    const {name, weight, sprites, className, types } = this.props;
    const typeObj = Object.values(types);
    return (
      <div className={`${className} poke-card`}>
        <h2 className="poke-name">{name}</h2>
        <div className="poke-info">
          <div>
            <div className="poke-sub-info">
              <label>Type:</label>
              {typeObj.map(({type}, i) => <Type key={i} type={type.name} />)}
            </div>
            <div className="poke-sub-info">
              <label>Weight:</label>
              <p className="poke-weight">{weight}lb</p>
            </div>
          </div>
          <img className="poke-sprite" src={sprites} alt="sprite" />
        </div>
      </div>
    )
  }
}

export default PokemonCard;

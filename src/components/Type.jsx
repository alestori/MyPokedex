import React, { Component } from 'react';

export class Type extends Component {
  render() {
    const {type, key} = this.props;
    console.log(key);
    return (
      <p>{type}</p>
    )
  }
}

export default Type

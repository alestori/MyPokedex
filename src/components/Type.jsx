import React, { Component } from 'react';

export class Type extends Component {
  render() {
    const {type} = this.props;
    return (
      <p>{type}</p>
    )
  }
}

export default Type

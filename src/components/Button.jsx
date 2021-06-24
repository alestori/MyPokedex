import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { text, className } = this.props;
    return (
      <button className={ className }>{ text }</button>
    )
  }
}

export default Button

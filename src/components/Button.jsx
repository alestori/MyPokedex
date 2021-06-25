import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { text, className, onClick } = this.props;
    console.log( onClick);
    return (
      <button className={ className }>{ text }</button>
    )
  }
}

export default Button

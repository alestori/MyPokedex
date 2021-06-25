import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { text, className, onClick } = this.props;
    return (
      <button className={ className } onClick={ onClick }>{ text }</button>
    )
  }
}

export default Button

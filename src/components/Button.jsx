import React, { Component } from 'react'

export class Button extends Component {
  render() {
    const { className, name, type } = this.props;
    return (
      <button
        type={type} 
        className={className}
        >{name}
      </button>
    )
  }
}

export default Button

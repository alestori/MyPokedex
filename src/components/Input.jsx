import React, { Component } from 'react'

export class Input extends Component {
  render() {
    const { inputLabel, className, name, onChange } = this.props;
    return (
      <label>
        {inputLabel}
        <input
          className={className}
          name={name}
          onChange={onChange}
        />
      </label>
    )
  }
}

export default Input

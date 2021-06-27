import React, { Component } from 'react'

export class Input extends Component {
  render() {
    const { inputLabel, className, name, onChange, labelClassName } = this.props;
    return (
      <label className={labelClassName}>
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

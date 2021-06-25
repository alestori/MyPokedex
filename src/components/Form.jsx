import React, { Component } from 'react'

export class Form extends Component {
  render() {
    const { onSubmit, className} = this.props;
    return (
      <form onSubmit={onSubmit}>

      </form>
    )
  }
}

export default Form

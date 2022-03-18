import React, { Component } from 'react'

export class Label extends Component {
  constructor(props) {
      super(props)
  }  

  render() {
    return (
      <label> {this.props.leyenda} {this.props.value}</label>
    )
  }
}

export default Label
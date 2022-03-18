
import React, { Component } from 'react'

export class Button extends Component {
  constructor(props) {
      super(props)
  }  
  render() {
    return (
      <button class="btn btn-primary mt-5" onClick={this.props.onClick}>
        {this.props.textBtn}
      </button>
    )
  }
}

export default Button
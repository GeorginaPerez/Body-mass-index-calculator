import React, { Component } from 'react'

export class UserInput extends Component {
    constructor(props){
        super(props)  
    }
       
  render() {
    return (
     <input  className="form-control" type =  {this.props.type} name= {this.props.nameI} 
            onChange ={this.props.fun} placeholder ={this.props.altText}/>
    )
  }
}

export default UserInput
import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = (e) => {
    console.log('what',e)
    let newColor = this.props.getcolor()
    console.log(newColor)
    this.setState({
      color: newColor
    })
  }
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={(e) => this.handleClick(e)}>
      </div>
    )
  }
  
}

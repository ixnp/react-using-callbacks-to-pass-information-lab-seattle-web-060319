import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {
  //initalize the state with selected color
  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  
  }
  setColor = str => {
    this.setState({selectedColor: str})
  }

    getColor = () => {
      return this.state.selectedColor
    }

//create a getcolor funciton that gets the value of current states color
  genRow = (vals) => (
    //this should call your getcolor
    vals.map((val, idx) => <Cell key={idx} color={val} getcolor={this.getColor} />)
  )

  genMatrix = () => (
    //this grabs the rows and passes it to genrow
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

//need to pass ColorSelector the setcolor
  render() {
    return (
      <div id="app">
    
        <ColorSelector setColor={this.setColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}

import React, { Component } from 'react';
import content from './content'
import './SmallSquare.css';

class SmallSquare extends Component {

render(){
  return(
    <div onClick={(e)=> this.props.fullscreen(this.props.squareNum)}>
      {this.props.smallContent}
    </div>

    )
}



 }

export default SmallSquare

import React, { Component } from 'react';

class BigSquare extends Component {

render(){
  return(
    <div>
      <h1>{this.props.bigContent}</h1>
      <button onClick={this.props.close}>Close</button>
    </div>

    )
}


 }

export default BigSquare

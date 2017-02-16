import React, { Component } from 'react';
import './BigSquare.css';


class BigSquare extends Component {

  componentWillMount(){
     document.addEventListener("keydown", this.handleKeyDown.bind(this), {once:true});
   }

  handleKeyDown(e){
    console.log('test')
    if (e.keyCode === 27){
      this.props.close()
    }
  }

  render(){
    return(
      <div>

        {this.props.bigContent}
        <button onClick={this.props.close}>Back</button>
      </div>

      )
  }


   }

  export default BigSquare

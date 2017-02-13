import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BigSquare from './BigSquare.js'
import SmallSquare from './SmallSquare.js'
import content from "./content"

class App extends Component {

  constructor() {
  super();
  this.state = {
    activeSquare: null,
    bigSquare: false,
    info: null
    };
  this.exitFullscreen = this.exitFullscreen.bind(this)
  this.fullscreener = this.fullscreener.bind(this)
  }


  fullscreener(num){
    var contentNum = Number(num)
    this.setState({activeSquare: num, bigSquare:true, info: content[contentNum].big})
  }

  exitFullscreen(){
    this.setState({bigSquare:false})
  }

  render() {
    if(this.state.bigSquare===false){
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Nick Michel: Web Developer</h2>
          </div>
          <div id="square-space">
            <SmallSquare fullscreen={this.fullscreener} id="about" squareNum="0" smallContent={content[0].small} />
            <SmallSquare fullscreen={this.fullscreener} id="skills"squareNum="1" smallContent={content[1].small} />
            <SmallSquare fullscreen={this.fullscreener} id="projects" squareNum="2" smallContent={content[2].small} />
            <SmallSquare fullscreen={this.fullscreener} id="contact" squareNum="3" smallContent={content[3].small} />
          </div>
        </div>
      );
    }
    else{
      return(
         <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Nick Michel: Web Developer</h2>
          </div>
        <div id="big-square">
          <BigSquare close={this.exitFullscreen} bigContent={this.state.info}/>
        </div>
        </div>
        )
    }
  }
}

export default App;

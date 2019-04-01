import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './Component/comp1'
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {turnOn: true};

    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick= () => {
    this.setState(state => ({
      turnOn: !state.turnOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.turnOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
  
  export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SquareCard from './SquareCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SquareCard 
          class = "SquareCard"
          headerText = "Renewal Power Hour & Resources"
          bodyText = "Find the Renewal Power Hour Video, Renewal Playbook, and Eval Plan here!"
          buttonText = "Learn More"
          icon = {require('./logo.svg')} 
          destinationLink = "#"
        />
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './TicTacToe';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TicTacToe width = { 3 } singlePlayer />
      </div>
    );
  }
}

export default App;

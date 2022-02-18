import React from 'react'
import Pokedex from './Components/Pokedex'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className='main'>
      <h1>POKEDEX</h1>
      <Pokedex />
      </div>
    );
  }
}

export default App;

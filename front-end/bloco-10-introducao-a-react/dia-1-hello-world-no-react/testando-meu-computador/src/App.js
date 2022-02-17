import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Acordar', 'Comer', 'Codar', 'Dormir'];

class App extends Component {
  render() {
    return (
      compromissos.map((compromisso) => <ul> {Task(compromisso)} </ul>)
    );
  }
}

export default App;

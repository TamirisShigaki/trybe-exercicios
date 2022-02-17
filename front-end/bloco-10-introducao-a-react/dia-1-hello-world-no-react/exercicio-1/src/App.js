import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Acordar', 'Comer', 'Codar'];

class App extends Component {
  render() {
    return (
      compromissos.map((compromisso) =>  Task(compromisso))
    );
  }
}

export default App;

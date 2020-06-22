import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projeto base para a aula CI.
        </p>
        <a
          className="App-link"
          href="https://www.fjn.edu.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site da FJN
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainView from './ui/MainView';

function App() {
  let data = {text: "you"};
  let temp = JSON.parse(localStorage.getItem('test'));
  if (temp == null) {
    console.log("Undefined");
  } else {
    data = temp;
  }
  console.log(data);

  return (
    <div className="App westli">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="westli">
          Shake <code>src/App.js</code> and save to reload {data.text}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MainView/>
    </div>
  );
}

export default App;

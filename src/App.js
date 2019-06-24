import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainView from './ui/MainView';

import { Navbar, NavbarBrand } from 'reactstrap';

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
      <Navbar color="dark">
        <NavbarBrand href="/"><img src={logo} alt="Westli" height="30" width="30" /></NavbarBrand>
      </Navbar>
        <MainView/>
    </div>
  );
}

export default App;

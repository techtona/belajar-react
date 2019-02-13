import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Product from './Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Product judul="Powerbank" harga="10.000"/>
        <Product judul="Powerbank" harga="10.000"/>
        <Product judul="Powerbank" harga="10.000"/>
        <Product judul="Powerbank" harga="10.000"/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <i class='fas fa-bars' />
        <Navbar />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">Loading</h1>
          <div className="wrapper">
            <div className="firstLine" />
            <div className="secondLine" />
            <div className="thirdLine" />
          </div> */}
          <h1 className="App-title">Loading</h1>
          <div className="wrapper2">
            <div className="outside" />
            <div className="middle" />
            <div className="center" />
            <div className="dot" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

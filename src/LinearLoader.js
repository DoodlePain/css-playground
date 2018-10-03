import React, { Component } from "react";
import "./App.css";

class LinearLoader extends Component {
  state = {
    color: "#3498db"
  };
  render() {
    return (
      <div className="App-header">
        <div className="wrapper">
          <div className="firstLine" />
          <div className="secondLine" />
          <div className="thirdLine" />
        </div>
      </div>
    );
  }
}

export default LinearLoader;

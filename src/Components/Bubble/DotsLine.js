import React, { Component } from "react";
import "./Dots.css";

class DotsLine extends Component {
  state = {
    color: "#3498db"
  };
  render() {
    return (
      <div className="App-header">
        <div className="wrapper">
          <div className="firstDot" />
          <div className="secondDot" />
          <div className="thirdDot" />
          <div className="fourthDot" />
        </div>
      </div>
    );
  }
}

export default DotsLine;

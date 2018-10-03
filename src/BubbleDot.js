import React, { Component } from "react";
import "./Dots.css";

class BubbleDot extends Component {
  state = {
    color: "#3498db"
  };
  render() {
    return (
      <div className="App-header">
        <div className="bubble">
          <div className="firstDot" />
          <div className="secondDot" />
          <div className="thirdDot" />
          <div className="fourthDot" />
        </div>
      </div>
    );
  }
}

export default BubbleDot;

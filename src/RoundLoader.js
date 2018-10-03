import React, { Component } from "react";
import "./App.css";

class RoundLoader extends Component {
  state = {
    color: "#3498db"
  };
  render() {
    return (
      <div className="App-header">
        <div className="wrapper2">
          <div
            className="outside"
            style={{
              borderTop: "3px solid " + this.state.color
            }}
          />
          <div
            className="middle"
            style={{
              borderTop: "3px solid " + this.state.color
            }}
          />
          <div
            className="center"
            style={{
              borderTop: "3px solid " + this.state.color
            }}
          />
          <div
            className="dot"
            style={{
              border: "3px solid " + this.state.color
            }}
          />
        </div>
      </div>
    );
  }
}

export default RoundLoader;

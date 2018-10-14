import React, { Component } from "react";
import "./Squares.css";

export default class ThreeSquares extends Component {
  render() {
    return (
      <div>
        <div className="wrapperSquares">
          <div className="firstSquare" />
          <div className="secondSquare" />
          <div className="thirdSquare" />
        </div>
      </div>
    );
  }
}

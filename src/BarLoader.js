import React, { Component } from "react";
import "./Bar.css";

export default class BarLoader extends Component {
  render() {
    return (
      <div>
        <div className="bar">
          <div className="first" />
          <div className="second" />
          <div className="third" />
          <div className="fourth" />
        </div>
      </div>
    );
  }
}

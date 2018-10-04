import React, { Component } from "react";
import "./App.css";
import LinearLoader from "./LinearLoader";
import RoundLoader from "./RoundLoader";
import DotsLine from "./DotsLine";
import BubbleDot from "./BubbleDot";
import ThreeSquares from "./ThreeSquares";
import HalfCircle from "./HalfCircle";
import BarLoader from "./BarLoader";

class App extends Component {
  state = {
    color: "#3498db"
  };
  render() {
    return (
      <div className="App-header">
        {/* <LinearLoader /> */}
        {/* <RoundLoader /> */}
        {/* <DotsLine /> */}
        <BubbleDot />
        {/* <HalfCircle /> */}
        {/* <ThreeSquares /> */}
        {/* <BarLoader /> */}
      </div>
    );
  }
}

export default App;

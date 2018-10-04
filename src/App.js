import React, { Component } from "react";
import "./App.css";
import LinearLoader from "./LinearLoader";
import RoundLoader from "./RoundLoader";
import DotsLine from "./DotsLine";
import BubbleDot from "./BubbleDot";
import ThreeSquares from "./ThreeSquares";
import HalfCircle from "./HalfCircle";

class App extends Component {
  state = {
    color: "#3498db"
  };
  render() {
    return (
      <div className="App">
        {/* <LinearLoader /> */}
        {/* <RoundLoader /> */}
        {/* <DotsLine /> */}
        {/* <BubbleDot /> */}
        {/* <HalfCircle /> */}
        <ThreeSquares />
      </div>
    );
  }
}

export default App;

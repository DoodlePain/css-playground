import React, { Component } from "react";
import "./App.css";
// import LinearLoader from "./Components/Linear/LinearLoader";
import TopLine from "./Components/Linear/TopLine";
// import RoundLoader from "./Components/Circle/RoundLoader";
// import DotsLine from "./Components/Bubble/DotsLine";
// import BubbleDot from "./Components/Bubble/BubbleDot";

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
        <TopLine />
      </div>
    );
  }
}

export default App;

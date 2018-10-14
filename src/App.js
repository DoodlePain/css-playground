import React, { Component } from "react";
import "./App.css";
<<<<<<< HEAD
// import LinearLoader from "./Components/Linear/LinearLoader";
import TopLine from "./Components/Linear/TopLine";
// import RoundLoader from "./Components/Circle/RoundLoader";
// import DotsLine from "./Components/Bubble/DotsLine";
// import BubbleDot from "./Components/Bubble/BubbleDot";
=======
import LinearLoader from "./LinearLoader";
import RoundLoader from "./RoundLoader";
import DotsLine from "./DotsLine";
import BubbleDot from "./BubbleDot";
import ThreeSquares from "./ThreeSquares";
import HalfCircle from "./HalfCircle";
import BarLoader from "./BarLoader";
>>>>>>> c38fefcbd945a9a77033e179e396e65557812119

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
<<<<<<< HEAD
        {/* <BubbleDot /> */}
        <TopLine />
=======
        <BubbleDot />
        {/* <HalfCircle /> */}
        {/* <ThreeSquares /> */}
        {/* <BarLoader /> */}
>>>>>>> c38fefcbd945a9a77033e179e396e65557812119
      </div>
    );
  }
}

export default App;

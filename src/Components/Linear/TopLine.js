import React, { Component } from "react";
import "./TopLine.css";

class App extends Component {
    state = {
        color: "#3498db"
    };
    render() {
        return (
            <div>
                <div className="TopLine" />
            </div>
        );
    }
}

export default App;

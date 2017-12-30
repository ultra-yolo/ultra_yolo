import React, { Component } from "react";
import PrimaryNavBar from "./components/NavigationBar/PrimaryNavBar";
import LotteryMetadataBar from "./components/NavigationBar/LotteryMetadataBar";
import LotteryGame from "./components/LotteryGame/LotteryGame";
import LotteryInfo from "./components/LotteryInfo/LotteryInfo";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <PrimaryNavBar />
        <LotteryMetadataBar />
        <LotteryGame />
        <LotteryInfo />
        <Footer />
      </div>
    );
  }
}

export default App;

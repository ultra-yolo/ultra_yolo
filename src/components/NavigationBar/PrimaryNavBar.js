import React, { Component } from "react";
import SocialMediaButtonGroup from "../SocialMediaButtonGroup";
import {
  PrimaryNavBarContainer,
  PrimaryNavBarItem
} from "./PrimaryNavBar.style";

class PrimaryNavBar extends Component {
  render() {
    return (
      <PrimaryNavBarContainer justify="flex-end" align="center">
        <PrimaryNavBarItem to="/">
          <img src={require("../../assets/logo_bgfwsg.jpg")} alt="Ultra Yolo" />
        </PrimaryNavBarItem>
        <PrimaryNavBarItem to="/">GitHub</PrimaryNavBarItem>
        <PrimaryNavBarItem to="/" className="last-item">
          ICO
        </PrimaryNavBarItem>
        <SocialMediaButtonGroup header />
      </PrimaryNavBarContainer>
    );
  }
}

export default PrimaryNavBar;

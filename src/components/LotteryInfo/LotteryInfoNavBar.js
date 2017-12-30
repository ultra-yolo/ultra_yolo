import React, { Component } from "react";
import { LotteryInfoNavBarContainer } from "./LotteryInfoNavBar.style";
import LotteryInfoNavBarItem from "./LotteryInfoNavBarItem";

class LotteryInfoNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationItems: [
        "DRAW HISTORY",
        "WINS HISTORY",
        "YOUR TICKETS",
        "SMART CONTRACT",
        "DIVIDENDS",
        "HOW TO PLAY",
        "FAQ"
      ],
      activeNavItemIndex: props.activeNavItemIndex
    };
  }

  render() {
    return (
      <LotteryInfoNavBarContainer justify="space-around" align="center">
        {this.state.navigationItems.map((title, i) => (
          <LotteryInfoNavBarItem
            navItemIndex={i}
            title={title}
            toggleActiveNavItem={this.props.toggleActiveNavItem.bind(this)}
          />
        ))};
      </LotteryInfoNavBarContainer>
    );
  }
}

export default LotteryInfoNavBar;

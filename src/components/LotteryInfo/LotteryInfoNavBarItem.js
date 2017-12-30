import React, { Component } from "react";
import { LotteryInfoNavigationItem } from "./LotteryInfoNavBar.style";

class LotteryInfoNavBarItem extends Component {
  handleClick() {
    this.props.toggleActiveNavItem(this.props.navItemIndex);
  }

  render() {
    return (
      <LotteryInfoNavigationItem
        onClick={this.handleClick.bind(this)}
        isFaq={this.props.title === "FAQ"}
      >
        {this.props.title}
      </LotteryInfoNavigationItem>
    );
  }
}

export default LotteryInfoNavBarItem;

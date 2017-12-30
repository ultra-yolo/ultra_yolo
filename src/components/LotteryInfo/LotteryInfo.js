import React, { Component } from "react";
import LotteryInfoNavBar from "./LotteryInfoNavBar";
import { Div, Container } from "../../theme/grid";

import DividendsSection from "./LotteryInfoSubSections/DividendsSection";
import DrawHistorySection from "./LotteryInfoSubSections/DrawHistorySection";
import FAQSection from "./LotteryInfoSubSections/FAQSection";
import HowToPlaySection from "./LotteryInfoSubSections/HowToPlaySection";
import SmartContractsSection from "./LotteryInfoSubSections/SmartContractsSection";
import WinHistorySection from "./LotteryInfoSubSections/WinHistorySection";
import YourTicketsSection from "./LotteryInfoSubSections/YourTicketsSection";

class LotteryInfo extends Component {
  constructor() {
    super();
    this.state = {
      navItemIndex: 0
    };
  }

  toggleActiveNavItem(navItemIndex) {
    if (navItemIndex !== this.state.navItemIndex) {
      this.setState({ navItemIndex });
    }
  }

  render() {
    return (
      <Div marginTop="40px">
        <LotteryInfoNavBar
          activeNavItemIndex={this.state.navItemIndex}
          toggleActiveNavItem={this.toggleActiveNavItem.bind(this)}
        />
        <Container>
          <DrawHistorySection isActive={this.state.navItemIndex === 0} />
          <WinHistorySection isActive={this.state.navItemIndex === 1} />
          <YourTicketsSection isActive={this.state.navItemIndex === 2} />
          <SmartContractsSection isActive={this.state.navItemIndex === 3} />
          <DividendsSection isActive={this.state.navItemIndex === 4} />
          <HowToPlaySection isActive={this.state.navItemIndex === 5} />
          <FAQSection isActive={this.state.navItemIndex === 6} />
        </Container>
      </Div>
    );
  }
}

export default LotteryInfo;

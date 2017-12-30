import React, { Component } from "react";
import { SubSectionContainer } from "./LotteryInfoSubSections.style";

class DividendsSection extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      isActive: this.props.isActive
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ isActive: props.isActive });
  }

  render() {
    return (
      <SubSectionContainer active={this.state.isActive}>
        <h1>Dividends Section</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </SubSectionContainer>
    );
  }
}

export default DividendsSection;

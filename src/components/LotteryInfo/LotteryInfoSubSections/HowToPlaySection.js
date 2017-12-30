import React, { Component } from "react";
import PropTypes from "prop-types";
import { SubSectionContainer } from "./LotteryInfoSubSections.style";

class HowToPlaySection extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
        <h1>How To Play Section</h1>
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

export default HowToPlaySection;

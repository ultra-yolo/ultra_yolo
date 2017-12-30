import React, { Component } from "react";
import { RewardSectionContainer } from "./RewardSection.style";

class RewardSection extends Component {
  render() {
    return (
      <RewardSectionContainer>
        <b>Your Estimated Reward Is:</b>
        <ul>
          <li>
            HIT #6: <span>1000 ETH</span>
          </li>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </RewardSectionContainer>
    );
  }
}

export default RewardSection;

import React from "react";
import { MetadataContainer, NavigationItem } from "./LotteryMetadataBar.style";

const LotteryMetadataBar = () => {
  return (
    <MetadataContainer justify="space-around" align="center">
      <NavigationItem>
        Current Pot:<br /> $4,563,035 / 5,343.64 ETH
      </NavigationItem>
      <NavigationItem>
        Tickets Purchased:<br />
        <b>2533</b>
      </NavigationItem>
      <NavigationItem>
        LAST DRAW:<br />
        2 4 4 15 1 14
      </NavigationItem>
      <NavigationItem>Win History >></NavigationItem>
    </MetadataContainer>
  );
};

export default LotteryMetadataBar;

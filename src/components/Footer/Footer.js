import React from "react";
import SocialMediaButtonGroup from "../SocialMediaButtonGroup";
import { Flex } from "../../theme/grid";

const Footer = () => {
  return (
    <div>
      <hr />
      <Flex justify="center" align="center">
        <SocialMediaButtonGroup footer />
      </Flex>
    </div>
  );
};

export default Footer;

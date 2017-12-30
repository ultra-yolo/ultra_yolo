import React from "react";
import { SvgButton, Icon } from "./SocialMediaButtonGroup.style";
import { Div, A } from "../theme/grid";
import { telegramBlue, twitterBlue, bitcoinGold } from "../theme/variables";

const SocialMediaButtonGroup = props => {
  return (
    <Div {...props}>
      <A
        title="discord"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <SvgButton src={require("../assets/discord_icon.svg")} />
      </A>
      <A
        title="telegram"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <Icon
          className="fa fa-telegram fa-lg"
          color={telegramBlue}
          aria-hidden="true"
        />
      </A>
      <A
        title="twitter"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <Icon
          className="fa fa-twitter fa-lg"
          color={twitterBlue}
          aria-hidden="true"
        />
      </A>
      <A
        title="bitcointalk"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <Icon
          className="fa fa-btc fa-lg"
          color={bitcoinGold}
          aria-hidden="true"
        />
      </A>
    </Div>
  );
};

export default SocialMediaButtonGroup;

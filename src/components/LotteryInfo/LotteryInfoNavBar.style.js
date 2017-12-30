import styled from "styled-components";
import { Flex } from "../../theme/grid";
import { black, yellow } from "../../theme/variables";

export const LotteryInfoNavBarContainer = styled(Flex)`
  background: ${black};
  opacity: 0.9;
  height: 16vh;
`;

export const LotteryInfoNavigationItem = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: ${yellow};
  padding: ${props => (props.isFaq ? "10px 30px" : "10px 8px")};

  b {
    font-size: 1.2em;
  }

  &:hover {
    background-color: grey;
  }
`;

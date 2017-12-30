import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex } from "../../theme/grid";
import { headerGrey } from "../../theme/variables";

/* prettier-ignore */
export const PrimaryNavBarContainer = styled(Flex)`
  position: fixed;
  width: 100%;
  height: 70px;
  right: 0.5em;
  top: 0em;
  background-color: ${headerGrey};
  z-index: 99;

  .last-item {
    margin-right: 2vw;
  }
`;

export const PrimaryNavBarItem = styled(Link)`
  margin-right: 30px;
  font-size: 1.5em;
  float: right;
`;

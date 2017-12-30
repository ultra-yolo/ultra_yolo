import styled from "styled-components";
import { Flex } from "../../theme/grid";
import { black, yellow } from "../../theme/variables";

export const MetadataContainer = styled(Flex)`
  background: ${black};
  opacity: 0.9;
  margin-top: 70px;
  height: 16vh;
`;

export const NavigationItem = styled.div`
  text-decoration: none;
  color: ${yellow};

  b {
    font-size: 1.2em;
  }
`;

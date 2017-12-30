import styled from "styled-components";

export const SvgButton = styled.img`
  height: 3.6vh;
  width: 2vw;
  margin-left: -10px;
  margin-right: 4px;
  padding-bottom: 2px;
`;

export const Icon = styled.i`
  height: 7vh;
  width: 2vw;
  color: ${props => props.color};
  padding-top: 2px;

  &:hover {
    color: black;
  }
`;

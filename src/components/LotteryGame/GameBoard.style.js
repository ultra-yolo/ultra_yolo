import styled from "styled-components";
import { Button } from "react-bootstrap";

export const GameBoardContainer = styled.div`
  margin-left: 10px;
  width: 60%;
  position: relative;
`;

export const GameButton = styled(Button)`
  position: absolute;
  top: -5px;
  right: -40px;
`;

export const GameSubmitButton = styled(Button)`
  width: 45%;
  margin-top: 4vh;
  margin-bottom: 4vh !important;
  background-image: {require("../../assets/yolo_icon.jpg")};
`;

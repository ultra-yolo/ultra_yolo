import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import GameBoardNumberBanner from "./GameBoardNumberBanner";
import { Flex } from "../../theme/grid";
import {
  GameBoardContainer,
  GameButton,
  GameSubmitButton
} from "./GameBoard.style";

class GameBoard extends Component {
  constructor() {
    super();
    var lottery = [];
    for (var i = 0; i < 6; i++) {
      lottery.push(Math.floor(Math.random() * 10));
    }
    this.state = {
      lottery
    };
  }

  refreshLottery() {
    var lottery = [];
    for (var i = 0; i < 6; i++) {
      lottery.push(Math.floor(Math.random() * 10));
    }
    this.setState({ lottery });
  }

  render() {
    return (
      <div>
        <GameBoardContainer>
          <Flex justify="space-between">
            {this.state.lottery.map((item, i) => (
              <GameBoardNumberBanner key={i} number={item} />
            ))}
          </Flex>
          <GameButton bsSize="small" onClick={this.refreshLottery.bind(this)}>
            <Glyphicon glyph="refresh" />
          </GameButton>
          <Flex justify="center">
            <GameSubmitButton bsSize="medium" bsStyle="success">
              YOLO
            </GameSubmitButton>
          </Flex>
        </GameBoardContainer>
      </div>
    );
  }
}

export default GameBoard;

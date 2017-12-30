import React, { Component } from "react";
import UpDownTickButtons from "./UpDownTickButtons";
import { Flex, Container } from "../../theme/grid";
import { Input, TicketPrice } from "./LotteryGame.style";
import GameBoard from "./GameBoard";
import RewardSection from "./RewardSection";

class LotteryGame extends Component {
  constructor() {
    super();
    this.state = { numTickets: 1 };
  }

  uptick() {
    this.setState({ numTickets: this.state.numTickets + 1 });
  }

  downtick() {
    this.setState({
      numTickets: this.state.numTickets - (this.state.numTickets === 1 ? 0 : 1)
    });
  }

  render() {
    return (
      <Container>
        <RewardSection />
        <label htmlFor="numTickets">Number of Tickets: </label>
        <br />
        <Flex align="Flex-start">
          <Input
            type="number"
            value={this.state.numTickets}
            name="numTickets"
          />
          <UpDownTickButtons
            vertical
            uptick={this.uptick.bind(this)}
            downtick={this.downtick.bind(this)}
          />
        </Flex>
        <TicketPrice>Current Ticket Price: 0.1 eth</TicketPrice>
        <br />
        <GameBoard />
      </Container>
    );
  }
}

export default LotteryGame;

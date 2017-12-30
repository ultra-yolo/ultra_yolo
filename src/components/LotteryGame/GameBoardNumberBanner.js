import React, { Component } from "react";
import PropTypes from "prop-types";
import { NumberBanner } from "./GameBoardNumberBanner.style";
import UpDownTickButtons from "./UpDownTickButtons";

class GameBoardNumberBanner extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.number };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ number: nextProps.number });
  }

  uptick() {
    this.setState({
      number: this.state.number === 9 ? 0 : this.state.number + 1
    });
  }

  downtick() {
    this.setState({
      number: this.state.number === 0 ? 9 : this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <NumberBanner justify="center" align="center">
          <div className="number">{this.state.number}</div>
        </NumberBanner>
        <UpDownTickButtons
          vertical={false}
          uptick={this.uptick.bind(this)}
          downtick={this.downtick.bind(this)}
        />
      </div>
    );
  }
}

GameBoardNumberBanner.propTypes = {
  number: PropTypes.number.isRequired
};

export default GameBoardNumberBanner;

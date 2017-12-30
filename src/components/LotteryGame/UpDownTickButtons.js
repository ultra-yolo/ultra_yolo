import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button, Glyphicon } from "react-bootstrap";
import { Flex } from "../../theme/grid";

const UpDownTickButtons = props => {
  return (
    <Flex align="Flex-start" justify="center">
      <ButtonGroup vertical={props.vertical}>
        <Button bsSize="xsmall" onClick={props.uptick}>
          <Glyphicon glyph="arrow-up" />
        </Button>
        <Button bsSize="xsmall" onClick={props.downtick}>
          <Glyphicon glyph="arrow-down" />
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

UpDownTickButtons.propTypes = {
  vertical: PropTypes.bool.isRequired,
  uptick: PropTypes.func.isRequired,
  downtick: PropTypes.func.isRequired
};

export default UpDownTickButtons;

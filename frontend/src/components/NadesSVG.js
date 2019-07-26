import React, { Component } from "react";
import SmokeSVG from "./SmokeSVG";
import FlashSVG from "./FlashSVG";
import MolotovSVG from "./MolotovSVG";

class NadesSVG extends Component {
  render() {
    if (this.props.showUserNade & (this.props.startX !== 0)) {
      if (this.props.selectedOption === "Smoke") {
        return (
          <SmokeSVG
            startX={this.props.startX}
            startY={this.props.startY}
            endX={this.props.endX}
            endY={this.props.endY}
            nadeClass={this.props.nadeClass}
          />
        );
      } else if (this.props.selectedOption === "Flash") {
        return (
          <FlashSVG
            startX={this.props.startX}
            startY={this.props.startY}
            endX={this.props.endX}
            endY={this.props.endY}
            nadeClass={this.props.nadeClass}
          />
        );
      } else if (this.props.selectedOption === "Molotov") {
        return (
          <MolotovSVG
            startX={this.props.startX}
            startY={this.props.startY}
            endX={this.props.endX}
            endY={this.props.endY}
            nadeClass={this.props.nadeClass}
          />
        );
      }
    } else {
      return null;
    }
  }
}

export default NadesSVG;

import React, { Component } from "react";
import Smokes from "./Smokes";
import Molotovs from "./Molotovs";
import Flashes from "./Flashes";

class TerroristNades extends Component {
  render() {
    if (this.props.tOrCt === "T") {
      return (
        <React.Fragment>
          <Smokes
            match={this.props.match}
            nadeData={this.props.nadeData.filter(nade => nade.type === "Smoke")}
            smokesFlag={this.props.smokesFlag}
            flashesFlag={this.props.flashesFlag}
            molotovsFlag={this.props.molotovsFlag}
            nadeClass={this.props.nadeClass}
          />
          <Molotovs
            match={this.props.match}
            nadeData={this.props.nadeData.filter(
              nade => nade.type === "Molotov"
            )}
            smokesFlag={this.props.smokesFlag}
            flashesFlag={this.props.flashesFlag}
            molotovsFlag={this.props.molotovsFlag}
            nadeClass={this.props.nadeClass}
          />
          <Flashes
            match={this.props.match}
            nadeData={this.props.nadeData.filter(nade => nade.type === "Flash")}
            smokesFlag={this.props.smokesFlag}
            flashesFlag={this.props.flashesFlag}
            molotovsFlag={this.props.molotovsFlag}
            nadeClass={this.props.nadeClass}
          />
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default TerroristNades;

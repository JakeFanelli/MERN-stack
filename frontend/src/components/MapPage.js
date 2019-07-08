import React, { Component } from "react";
import DATA from "../data/mapData";
import FilterBar from "./FilterBar";
import TerroristNades from "./TerroristNades";
import CounterTerroristNades from "./CounterTerroristNades";
import Loader from "./Loader";
import NADE_DATA from "../data/nadeData";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapImage: "",
      mapTitle: "",
      mapAlt: "",
      loaded: "",
      visibility: "invisible",
      nadeData: NADE_DATA
    };
  }

  componentWillMount() {
    DATA.forEach(mapObj => {
      let uppercaseMapTitle =
        this.props.match.params.id.charAt(0).toUpperCase() +
        this.props.match.params.id.slice(1);
      if (
        uppercaseMapTitle.substring(0, 4) === mapObj.mapTitle.substring(0, 4)
      ) {
        this.setState({
          mapTitle: mapObj.mapTitle,
          mapImage: mapObj.overlaysrc,
          mapAlt: mapObj.alt
        });
      }
    });
  }

  loaded = () => {
    this.setState({ loaded: true, visibility: "visible" });
  };

  render() {
    return (
      <div className="container">
        <Loader loaded={this.state.loaded} />
        <div className={this.state.visibility}>
          <h2 className="mapTitle">{this.state.mapTitle}</h2>
          <FilterBar
            tOrCt={this.props.tOrCt}
            switchSides={this.props.switchSides}
            smokesFlag={this.props.smokesFlag}
            flashesFlag={this.props.flashesFlag}
            molotovsFlag={this.props.molotovsFlag}
            smokesFlagUpdate={this.props.smokesFlagUpdate}
            flashesFlagUpdate={this.props.flashesFlagUpdate}
            molotovsFlagUpdate={this.props.molotovsFlagUpdate}
          />
          <div id="contentContainer">
            <div id="mapRow" className="row">
              <div
                id="mapCol"
                className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
              >
                <img
                  id="imgBox"
                  className="img-responsive overlay"
                  src={this.state.mapImage}
                  alt={this.state.mapAlt}
                  onLoad={this.loaded}
                />
                <svg
                  className="svgClass"
                  viewBox="0 0 250 250"
                  preserveAspectRatio="none"
                >
                  <TerroristNades
                    match={this.props.match}
                    tOrCt={this.props.tOrCt}
                    nadeData={this.state.nadeData}
                    smokesFlag={this.props.smokesFlag}
                    flashesFlag={this.props.flashesFlag}
                    molotovsFlag={this.props.molotovsFlag}
                  />
                  <CounterTerroristNades
                    match={this.props.match}
                    tOrCt={this.props.tOrCt}
                    nadeData={this.state.nadeData}
                    smokesFlag={this.props.smokesFlag}
                    flashesFlag={this.props.flashesFlag}
                    molotovsFlag={this.props.molotovsFlag}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapPage;

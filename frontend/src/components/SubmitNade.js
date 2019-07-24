import React, { Component } from "react";
import MapDropdown from "./MapDropdown";
import MapOverlay from "./MapOverlay";
import DATA from "../data/mapData";
import RadioButtonsForType from "./RadioButtonsForType";
import RadioButtonsForSide from "./RadioButtonsForSide";
import TextInput from "./TextInput";

class SubmitNade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapChoice: "Mirage",
      mapImage: "",
      mapAlt: "",
      nadeTitle: "",
      nadeURL: "",
      selectedOption: "Smoke",
      selectedSideOption: "T"
    };
    this.handleMapChange = this.handleMapChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    DATA.forEach(mapObj => {
      if (mapObj.mapTitle === this.state.mapChoice) {
        this.setState({ mapImage: mapObj.overlaysrc, mapAlt: mapObj.mapAlt });
      }
    });
  }

  handleMapChange(event) {
    this.setState({ mapChoice: event.target.value });
    DATA.forEach(mapObj => {
      if (mapObj.mapTitle === event.target.value) {
        this.setState({ mapImage: mapObj.overlaysrc, mapAlt: mapObj.mapAlt });
      }
    });
  }

  handleSubmit(event) {
    alert("submitted");
    event.preventDefault();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  mouseClicker = event => {
    var root = document.getElementById("svgID");
    var uupos = root.createSVGPoint();
    uupos.x = event.clientX;
    uupos.y = event.clientY;
    var ctm = event.target.getScreenCTM();
    if ((ctm = ctm.inverse())) {
      uupos = uupos.matrixTransform(ctm);
    }

    console.log(Math.floor(uupos.x), Math.floor(uupos.y));
  };

  render() {
    return (
      <div className="container">
        <h2 className="mapTitle">Submit your own</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <MapDropdown
              handleMapChange={this.handleMapChange}
              mapChoice={this.state.mapChoice}
            />
          </div>
          <div className="form-group">
            <label className="label">Title: </label>
            <TextInput
              inputText={this.state.nadeTitle}
              name="nadeTitle"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="label">Gfycat URL: </label>
            <TextInput
              inputText={this.state.nadeURL}
              name="nadeURL"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <RadioButtonsForType
              selectedOption={this.state.selectedOption}
              handleChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <RadioButtonsForSide
              selectedSideOption={this.state.selectedSideOption}
              handleChange={this.handleChange}
            />
            <MapOverlay
              show={false}
              mapImage={this.state.mapImage}
              mapAlt={this.state.mapAlt}
              mouseClicker={this.mouseClicker}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SubmitNade;

import React, { Component } from "react";
import SponsorsCard from "./SponsorsCard";
import "./Sponsors.css";

export default class Wheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: 1800,
      cards: [],
      theta: 0.0,
    };

    this.imageList = props.Images;
    this.tempTheta = 0.0;
    this.animId = null;
  }

  componentDidMount() {
    let centerOfWheel = {
      x: parseFloat(this.wheel.style.width) / 2.0,
      y: parseFloat(this.wheel.style.height) / 2.0,
    };

    let newCards = [];

    //
    //      This variable is to modified when changing the number of sponsors
    //
    let numCards = 32;
    let constant = numCards / 2;

    for (let i = 0; i < numCards; i++) {
      newCards.push(
        <SponsorsCard
          theta={(Math.PI / parseFloat(constant)) * i}
          radius={this.state.radius}
          center={centerOfWheel}
          key={`card_${i}`}
          image={this.imageList[i]}
        />
      );
    }

    this.setState({ cards: newCards });
    console.log(newCards)
  }
  render() {
    return (
      <>
        <div
          ref={(refId) => (this.wheel = refId)}
          style={Styles.Wheel}
          className="SponsorsWheel"
        >
          {this.state.cards}
        </div>
        <div className="lg:mt-[0px] sm:mt-[100px] textHeading" style={Styles.heading}>

          <h1 className="text-lg font-bold text-custom-warm md:text-2xl lg:text-4xl" >OFFICIAL SPONSORS</h1>
          {/* <h1 className="font-bold text-white sm:text-lg lg:text-2xl" >OFFICIAL SPONSORS</h1> */}
        </div>
      </>
    );
  }
}

const Styles = {
  Wheel: {
    position: "absolute",
    top: "65%",
    left: "50%",
    transform: "translate( -50%, -100%)",
    height: "3600px",
    width: "3600px",
    borderRadius: "50%",
    backgroundColor: "#DB5461",
    overflowLeft: "hidden",
  },
  heading: {
    position: "absolute",
    paddingBottom: "15vh",
    left: "50%",
    transform: "translate( -50%, -100%)",
    textAlign: "center",
  },
  text: {
    smallhead: {
      color: "white",
      fontSize: "2vw",
      fontWeight: "bold",
    },
    largehead: {
      color: "white",
      fontSize: "5vw",
      fontWeight: "bold",
    },
  },
};

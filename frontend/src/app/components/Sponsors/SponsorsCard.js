import Image from "next/image";
import React from "react";

class SponsorsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getCoords = (theta, radius) => {
    return {
      x: Math.cos(theta) * radius,
      y: Math.sin(theta) * radius,
    };
  };

  render() {
    let newCoords = this.getCoords(this.props.theta, this.props.radius);

    return (
      <div
        style={{
          ...Styles.card,
          left: `${this.props.center.x + newCoords.x}px`,
          top: `${this.props.center.y - newCoords.y}px`,
        }}
        className="SponsorsCard"
      >
        <div style={Styles.cardInner}>
          <Image
            src={`${this.props.image}`}
            alt="renaissance mnnit sponsors"
            className="object-cover -rotate-12"
            height={150}
            width={150}
            loading="lazy"
          />
        </div>
      </div>
    );
  }
}

const Styles = {
  card: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate( -50%, -50%)",
    padding: "6px",
    borderWidth: "0px",
    overflow: "hidden",
    margin: "10px",
    boxShadow: "0px 0px 15px 3px rgba( 0, 0, 0, .5)",
    backgroundColor: "white",
  },
  cardInner: {
    backgroundSize: "cover",
    borderRadius: "75px",
    overflow: "hidden",
    height: "100%",
    width: "100%",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default React.memo(SponsorsCard);

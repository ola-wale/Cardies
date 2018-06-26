import React, { Component } from "react";
import "./City1.css";
export class City1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: ""
    };
    this.hoverTimeoutId = 0;
    this.country = props.country || "";
    this.city = props.name || "";
    this.src = props.src || "";
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  render() {
    return (
      <div
        style={{ transform: this.state.transform }}
        onMouseEnter={this.mouseEnter}
        onMouseMove={this.mouseMove}
        onMouseLeave={this.mouseLeave}
        className="City1">
        <img alt={this.city} src={this.src} />
        <div className="Details">
          <h5>{this.city}</h5>
          <small>{this.country}</small>
        </div>
      </div>
    );
  }

  mouseEnter() {
    this.setState({ hovering: true });
    clearTimeout(this.hoverTimeoutId);
  }

  mouseLeave() {
    this.hoverTimeoutId = setTimeout(() => {
      this.setState({
        transform: "perspective(400px) rotateX(0deg) rotateY(0deg)"
      });
    }, 2000);
  }

  mouseMove(e) {
    var width = e.currentTarget.clientWidth;
    var height = e.currentTarget.clientHeight;
    var x =
      e.nativeEvent.offsetX === undefined
        ? e.nativeEvent.layerX
        : e.nativeEvent.offsetX;
    var y =
      e.nativeEvent.offsetY === undefined
        ? e.nativeEvent.layerY
        : e.nativeEvent.offsetY;
    var rotX = (10 * x - width * 5) / width;
    var rotY = (10 * y - height * 5) / height;
    this.setState({
      transform:
        "perspective(400px) rotateX(" + rotY + "deg) rotateY(" + -rotX + "deg)"
    });
  }
}

export default City1;

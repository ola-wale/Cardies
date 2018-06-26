import React, { Component } from "react";
import "./Profile.css";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.name = props.name || "";
    this.roles = props.roles || [];
    this.src = props.src || "";
    this.state = {
      scrollPos: 0,
      hovering: false,
      transform: ""
    };
    this.hoverTimeoutId = 0;
    this.moveRoles = this.moveRoles.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }
  render() {
    return (
      <div
        style={{ transform: this.state.transform }}
        onMouseMove={this.mouseMove}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        className={"Profile " + (this.state.hovering ? "hovering" : "")}>
        <img alt={this.name} src={this.src} />
        <div className="Details">
          <h5>{this.name}</h5>
          <ul
            style={{ transform: `translateX(${-this.state.scrollPos}%)` }}
            className="Roles">
            {this.roles.map((role, index) => {
              return <li key={index}>{role}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }

  moveRoles(e) {
    this.setState({
      scrollPos:
        ((e.clientX - e.currentTarget.offsetLeft) /
          e.currentTarget.clientWidth) *
        100
    });
  }

  mouseEnter() {
    this.setState({ hovering: true });
    clearTimeout(this.hoverTimeoutId);
  }
  mouseLeave() {
    this.setState({ scrollPos: 0 });
    this.hoverTimeoutId = setTimeout(() => {
      this.setState({
        hovering: false,
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
    this.moveRoles(e);
  }
}

export default Profile;

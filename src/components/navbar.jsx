import React, { Component } from "react";
import { cursorLightAnimation } from "../animations/anim.js";
class NavBar extends Component {
  render() {
    return (
      <div className="nav-wrap">
        <ul className="nav">
          {this.props.options.map(o => (
            <span
              className="nav-link"
              key={o.id}
              id={o.id}
              onClick={() => {
                this.props.onSP(o.id);
              }}
              onMouseMove={event => {
                cursorLightAnimation(event, o.id);
              }}
            >
              <span className="nav-text">{o.title}</span>
              <span id={o.id + "s"} className="nav-light"></span>
            </span>
          ))}
        </ul>
      </div>
    );
  }
}

export default NavBar;

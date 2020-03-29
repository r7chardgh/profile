import React, { Component } from "react";
import { cursorLightAnimation } from "../animations/anim.js";
import BtnIcon from "./btnicon.jsx";
class NavBar extends Component {
  render() {
    return (
      <div className="nav-wrap">
        <ul className="nav">
          {this.props.options.map(o => (
            <React.Fragment>
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
                <span id={o.id + "s"} className="nav-light"></span>
                <div className="svg-wrap">
                  <BtnIcon key={o.id} option={o} />
                </div>
              </span>
            </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
}

export default NavBar;

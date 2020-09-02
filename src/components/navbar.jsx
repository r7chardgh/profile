import React, { Component } from "react";
import { scrollIntoElem, cursorLightAnimation } from "../animations/anim.js";
import BtnIcon from "./btnicon.jsx";
class NavBar extends Component {
  render() {
    return (
      <div className="nav-wrap">
        <div className="nav">
          {this.props.options.map((o) => (
            <React.Fragment>
            <a
              className="nav-link"
              key={o.id}
              id={o.id}
              href={o.link}
              alt={o.title}
              onClick={() => {
                this.props.onSP(o.id);
              }}
              onMouseMove={(event) => {
                cursorLightAnimation(event, o.id);
              }}
            >
              <span id={o.id + "s"} className="nav-light"></span>
              <div className="svg-wrap">
                <BtnIcon key={o.id} option={o} />
              </div>
            </a>
            <div className="tooltip"><p className="tooltip-text">{o.title}</p></div>
            </React.Fragment>
            
          ))}
        </div>
      </div>
    );
  }
}

export default NavBar;

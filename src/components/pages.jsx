import React, { Component } from "react";
import Exp from "./exp.jsx";
import Info from "./info.jsx";
import Skill from "./skill.jsx";
import Work from "./work.jsx";
import Contact from "./contact.jsx";
import {
  pageLoad,
  scrollIntoElem,
  fadeInFromRight,
} from "../animations/anim.js";

class Pages extends Component {
  componentDidUpdate() {
    console.log("updated");
    const elemId = this.props.options
      .find((e) => e.isSelected)
      .link.replace("#", "");
    scrollIntoElem(elemId);
    pageLoad(elemId);
  }
  render() {
    return (
      <div onScroll={this.props.onScr} id="page" className="page-wrap">
        <Info option={this.props.options[0]} />
        <Skill option={this.props.options[1]} />
        <Exp option={this.props.options[2]} />
        <Work option={this.props.options[3]} />
        <Contact option={this.props.options[4]} />
      </div>
    );
  }
}

export default Pages;

import React, { Component } from "react";
import Exp from "./exp.jsx";
import Info from "./info.jsx";
import Skill from "./skill.jsx";
import Work from "./work.jsx";
import Contact from "./contact.jsx";
import { fadeInFromRight } from "../animations/anim.js";

class Pages extends Component {
  componentDidUpdate() {
    fadeInFromRight("page");
  }
  render() {
    return (
      <div id="page" className="page-wrap">
        
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

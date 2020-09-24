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
    console.log("page-updated");
    this.setScroll();
    setTimeout(()=>this.resetScroll(),1000);
    const elemId = this.props.options
      .find((e) => e.isSelected)
      .link.replace("#", "");
    scrollIntoElem(elemId);
    pageLoad(elemId);
  }
  setScroll(){
    document.getElementById("page").style.overflow = "hidden";
  }
  resetScroll(){
    document.getElementById("page").style.overflow = "auto";
  }
  render() {
    return (
      <div onScroll={this.props.onScr} id="page" className="page-wrap">
        <Info option={this.props.options[0]} />
        <Skill option={this.props.options[1]} />
        <Exp option={this.props.options[2]} />
        <Work key ={this.props.workKey} option={this.props.options[3]} />
        <Contact option={this.props.options[4]} />
      </div>
    );
    
  }
}

export default Pages;

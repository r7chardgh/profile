import React, { Component } from "react";
import { scrollIn } from "../animations/anim.js";
import photo1 from "../images/avatar.jpg";
class Info extends Component {
  state = {};
  render() {
    if (!this.props.option.isSelected) return null;

    return (
      <div id="aboutme" onScroll={() => scrollIn("aboutme")} className="page">
        <h1 className="page-title">{this.props.option.title}</h1>
        <main className="page-content">
          <div className="scroll-Target info-wrap scrolled">Richard Tsang</div>
          <div className="scroll-Target info-wrap scrolled">
            Graduated Student
          </div>
          <div className="scroll-Target info-wrap">Living Place</div>
          <div className="scroll-Target info-wrap">Language</div>
          <div className="scroll-Target info-wrap">Introduction</div>
          <div className="scroll-Target info-wrap">Email</div>
          <div className="scroll-Target info-wrap">Blog</div>

          <div className="card-wrap">
            <img className="card-image" src="../images/avatar.jpg" alt="card" />
            <div className="card-text">This is random text.</div>
          </div>
          <div className="card-wrap">
            <img className="card-image" src="../images/avatar.jpg" alt="card" />
            <div className="card-text">This is random text.</div>
          </div>
          <div className="card-wrap">
            <img className="card-image" src={photo1} alt="card" />
            <div className="card-text">This is random text.</div>
          </div>
        </main>
      </div>
    );
  }
}

export default Info;

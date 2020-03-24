import React from "react";
import { scrollIn } from "../animations/anim.js";
const Info = props => {
  if (!props.option.isSelected) return null;

  return (
    <div
      id="aboutme"
      onScroll={() => scrollIn("aboutme")}
      className="page"
    >
      <h1 className="page-title">{props.option.title}</h1>
      <div className="scroll-Target info-content scrolled">Richard Tsang
      </div>
      <div className="scroll-Target info-content scrolled">Graduated Student</div>
      <div className="scroll-Target info-content">Living Place</div>
      <div className="scroll-Target info-content">Language</div>
      <div className="scroll-Target info-content">Introduction</div>
      <div className="scroll-Target info-content">Email</div>
      <div className="scroll-Target info-content">Blog</div>
    </div>
  );
};

export default Info;

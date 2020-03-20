import React from "react";
import { scrollIn } from "../animations/anim.js";
const Info = props => {
  if (!props.option.isSelected) return null;

  return (
    <div
      id="aboutme"
      onScroll={() => scrollIn("aboutme")}
      className="page-content"
    >
      <h1>{props.option.title}</h1>
      <div className="scroll-Target">1</div>
      <div className="scroll-Target">2</div>
      <div className="scroll-Target">3</div>
      <div className="scroll-Target">4</div>
    </div>
  );
};

export default Info;

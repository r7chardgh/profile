import React from "react";
import propic from "../assets/images/propic-sc.png";
import d from "../helpers/d";
function Intro({ firstname, lastname, role }) {
  return (
    <div className="container container--flex-sb container--div">
      <article className="intro-text">
        <span className="greeting">Hello, it's me.</span>
        <h1 className="name">{`${d(firstname)} ${d(lastname)}`}</h1>
        <p className="message">
          I'm a {d(role)},<br />
          currently playing with reactJS.
        </p>
      </article>
      <div className="cover">
        <svg
          className="propic-svg"
          viewBox="0 0 640 496"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="propic-svg__path"
            d="M0.5 495.5V411.887L243.867 215.5H429.303L639.5 243.252V495.5H0.5Z"
            stroke="black"
          />
          <image width="642" height="497" xlinkHref={propic} />
          <circle
            className="propic-svg__circle"
            cx="304"
            cy="224"
            r="223.5"
            stroke="#202E3B"
          />
        </svg>
      </div>
    </div>
  );
}

export default Intro;

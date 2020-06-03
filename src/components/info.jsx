import React, { Component } from "react";
import { scrollIn } from "../animations/anim.js";
import InterestIcon from "./interest.jsx";

const midBox = { width: "48%" };
const interestCard = { width: "28%" };
class Info extends Component {
  state = {
    person: {
      name: "Richard Tsang",
      langs: [
        { id: 1, type: "Cantonese", level: "Native" },
        { id: 2, type: "English", level: "Advanced" },
        { id: 3, type: "Mandarin", level: "Advanced" },
      ],
      living: "Hong Kong",
      blog: [
        { id: 1, type: "IT Blog", link: "https://blog.3bro.info/" },
        { id: 2, type: "Personal Blog", link: "https://richard.3bro.info/" },
      ],
      email: "richardtcfung@gmail.com",
      intro:
        "Fresh graduated computer-science student looking for fun and challenging career in web developing field. Passionate about solving puzzles and creating things.",
      interest: [
        { id: 1, item: "Workout" },
        { id: 2, item: "Music" },
        { id: 3, item: "Basketball" },
        { id: 4, item: "Food" },
        { id: 5, item: "Hiking" },
        { id: 6, item: "Gaming" },
      ],
    },
  };
  render() {
    if (!this.props.option.isSelected) return null;

    return (
      <div id="aboutme" onScroll={() => scrollIn("aboutme")} className="page">
        <h1 className="page-title">{this.props.option.title}</h1>
        <main className="page-content">
          <div className="info-wrap">
            {/* <span id="info-tag">Name: </span> */}
            <span id="info-data" style={{ "font-size": "2.4em" }}>
              {this.state.person.name}
            </span>
          </div>
          <div className="info-wrap" style={midBox}>
            <span id="info-tag">Living Place:</span>
            <span id="info-data">{this.state.person.living}</span>
          </div>
          <div className="info-wrap">
            <span id="info-tag">Introduction: </span>
            <span id="info-data">{this.state.person.intro}</span>
          </div>
          <div className="info-wrap" style={midBox}>
            <span id="info-tag">Email: </span>
            <span id="info-data">{this.state.person.email}</span>
          </div>
          <div className="info-wrap" style={midBox}>
            <span id="info-tag">Languages: </span>
            <span id="info-data">
              {this.state.person.langs.map((b) => (
                <span key={b.id}>
                  {b.type}:{" "}
                  <span
                    style={{
                      color:
                        b.level === "Native"
                          ? "var(--level-high)"
                          : "var(--level-mid)",
                    }}
                  >
                    {b.level}
                  </span>
                </span>
              ))}
            </span>
          </div>
          <div className="info-wrap">
            <span id="info-tag">Blog: </span>
            <span id="info-data">
              {this.state.person.blog.map((b) => (
                <span key={b.id}>
                  {b.type}:{b.link}
                </span>
              ))}
            </span>
          </div>
          <div className="info-wrap">
            <span id="info-tag">Interest: </span>
            <span id="info-data" style={interestCard}>
              {this.state.person.interest.map((b) => (
                <span key={b.id}>
                  {b.item}
                  <span className="interest-icon">
                    <InterestIcon id={b.id} />
                  </span>
                </span>
              ))}
            </span>
          </div>
        </main>
      </div>
    );
  }
}

export default Info;

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
        "I'm a code-lover and art-lover. I love coding since I was a high school student. Like many other teens, I love to play website/video games (pokimon or ninja-themed game) at that time. Maybe that's the reason I start to learn coding. After I've got my bachelor degree, I'm currently learning web developing and some design skills via the internet. Hopefully I will be a part of the hacking industry. Art is my second biggest interest, I have done some designs (for homeworks/ for th e promotion my school dragon boat team). The reason I love art is because of its aesthetic feeling, it's just as simple as that.",
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
  componentDidUpdate() {
    this.handleFirstLoad();
  }
  handleFirstLoad() {
    const introData = document.getElementsByClassName("intro-data");
    console.log(introData);
  }
  render() {
    if (!this.props.option.isSelected) return null;

    return (
      <div id="aboutme" className="page">
        <h1 className="page-title load">{this.props.option.title}</h1>
        <main className="page-content load">
          <div className="intro-wrap">
            <span className="intro-data load">{this.state.person.intro}</span>
          </div>
          <div className="info-wrap">
            {/* <span id="info-tag">Name: </span> */}
            <span id="info-data" style={{ fontSize: "2.4em" }}>
              {this.state.person.name}
            </span>
          </div>
          <div className="info-wrap" style={midBox}>
            <span id="info-tag">Living Place:</span>
            <span id="info-data">{this.state.person.living}</span>
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
          <div id="1" className="endbar"></div>
        </main>
      </div>
    );
  }
}

export default Info;

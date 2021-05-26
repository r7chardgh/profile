import React, { Component } from "react";
import InterestIcon from "./interest.jsx";

const noWidth = { width: "auto" };
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
        "I'm a code-lover and art-lover. I love coding since I was a high school student. Like many other teens, I love to play website/video games (pokimon or ninja-themed game) at that period of time. Maybe that's the reason I start to learn coding. I'm currently learning web developing and some design skills via the internet. Art is my second biggest interest, sometimes but not always, I do designs (have done before: classworks/ leaflet for my school dragon boat team). The reason why I love art is it gives me aesthetic feeling (hard to explain) and the joy to share my feeling on the canvas, it's just as simple as that.",
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
      <div id="aboutme" className="page">
        <h1 className="page-title load">{this.props.option.title}</h1>
        <main className="page-content load"><div
              className="name-wrap"
              style={{ "justifyContent": "flex-start" }}
            >
              <span id="name-data" className="name-data">
                {this.state.person.name}
              </span>
            </div>
            <div className="intro-wrap">
              <span className="intro-data load">{this.state.person.intro}</span>
            </div>
          {/*INFO SECTION*/}
          <div className="info-section">
            
            
            <div className="info-wrap" style={noWidth}>
              <span id="info-tag">Living Place:</span>
              <span id="info-data"style={noWidth}>{this.state.person.living}</span>
            </div>
            <div className="info-wrap"style={noWidth}>
              <span id="info-tag">Email: </span>
              <span id="info-data"style={noWidth}>{this.state.person.email}</span>
            </div>
            <div className="info-wrap">
              <span id="info-tag">Languages: </span>
              <span id="info-data">
                {this.state.person.langs.map((b) => (
                  <span key={b.id} className="language">
                    <span className="langType">{b.type}</span>
                    <span
                    className="langLevel"
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
                  <span className="blog" key={b.id}>
                    <span className="blogType">{b.type}</span>
                    <a className="blogLink" href={b.link} target="_blank" rel="noopener noreferrer">{b.link}</a>
                  </span>
                ))}
              </span>
            </div>
            <div className="info-wrap">
              <span id="info-tag">Interest: </span>
              <span id="info-data">
                {this.state.person.interest.map((b) => (
                  <span key={b.id} className="interest">
                    <span>{b.item}</span>
                    <span className="interest-icon">
                      <InterestIcon id={b.id} />
                    </span>
                  </span>
                ))}
              </span>
            </div>
          </div>

          <div id="1" className="endbar"></div>
        </main>
      </div>
    );
  }
}

export default Info;

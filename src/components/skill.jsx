import React, { Component } from "react";
class Skill extends Component {
  state = {
    skill: [
      {
        type: "Frontend",
        name: "Frontend Web Coding",
        item: [
          { type: "HTML", level: "familiar", scale: "5" },
          { type: "JavaScript", level: "familiar", scale: "4" },
          { type: "CSS", level: "familiar", scale: "4" },
        ],
      },
      {
        type: "Programming",
        name: "Programming",
        item: [
          { type: "C++", level: "capable", scale: "3" },
          { type: "NodeJS", level: "capable", scale: "2" },
        ],
      },
      {
        type: "WebFramework",
        name: "Web Framework / Library",
        item: [
          { type: "ReactJS", level: "familiar", scale: "4" },
          { type: "NextJS", level: "familiar", scale: "4" },
        ],
      },
      {
        type: "Design",
        name: "Design",
        item: [
          { type: "Gimp", level: "capable", scale: "3" },
          { type: "Figma", level: "capable", scale: "3" },
        ],
      },
    ],
  };
  handleCardLoad = () => {
    console.log("123");
  };
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="skills" className="page">
        <h1 className="page-title load">{this.props.option.title}</h1>
        <main className="page-content load">
          <div className="skill-wrap">
            {this.state.skill.map((s) => (
              <div className="skill-card" key={s.type}>
                <h1 className="skill-card-title">{s.name}</h1>
                {s.item.map((i) => (
                  <div className="skill-card-item" key={i.type}>
                    <span>{i.type}</span>
                    <span
                      style={{
                        display: "flex",
                        width: "4.2em",
                        backgroundColor: "grey",
                        borderRadius: "9px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor:
                            i.level === "familiar"
                              ? "var(--level-high)"
                              : "var(--level-mid)",
                          width: (i.scale / 6) * 100 + "%",
                          borderRadius: "9px",
                        }}
                      ></span>
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div id="2" className="endbar"></div>
        </main>
      </div>
    );
  }
}

export default Skill;

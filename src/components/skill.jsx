import React, { Component } from "react";
class Skill extends Component {
  state = {
    skill: [
      {
        type: "Frontend",
        name: "Frontend Web Devlopment",
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
          { type: "Python", level: "capable", scale: "2" },
        ],
      },
      {
        type: "WebFramework",
        name: "Web Framework / Library",
        item: [
          { type: "ReactJS", level: "capable", scale: "3" },
          { type: "Bootstrap", level: "capable", scale: "2" },
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
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="skills" className="page">
        <h1 className="page-title">{this.props.option.title}</h1>
        <main className="page-content">
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
                        "background-color": "grey",
                        "border-radius": "9px",
                      }}
                    >
                      <span
                        style={{
                          "background-color":
                            i.level === "familiar"
                              ? "var(--level-high)"
                              : "var(--level-mid)",
                          width: (i.scale / 6) * 100 + "%",
                          "border-radius": "9px",
                        }}
                      ></span>
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default Skill;

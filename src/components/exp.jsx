import React, { Component } from "react";
class Exp extends Component {
  state = {
    timeline: [
      {
        year: 2012,
        data: [
          {
            id: 1,
            type: "career",
            position: "Writer",
            start: "2012",
            end: "Present",
            organization: "3Bro Blog",
            description: "Publish IT-related articles.",
          },
        ],
      },
      {
        year: 2014,
        data: [
          {
            id: 2,
            type: "education",
            degree: "Associate Degree",
            admission: "2014",
            graduation: "2016",
            school: "HKU School of Professional and Continuing Education",
            abbrev: "HKUSPACE",
            program: "Associate of Engineering in Computer Science",
          },
        ],
      },
      {
        year: 2016,
        data: [
          {
            id: 3,
            type: "education",
            degree: "Bachelor Degree",
            admission: "2016",
            graduation: "2019",
            school: "Hong Kong University of Science and Technology",
            abbrev: "HKUST",
            program: "Bachelor of Engineering in Computer Science",
          },
        ],
      },
      {
        year: 2017,
        data: [
          {
            id: 4,
            type: "career",
            position: "Internship Engineer",
            start: "JUN/2017",
            end: "AUG/2017",
            organization: "BITCONNECT GROUP",
            description: "Install and Test Bitcoin ATM (Hardware)",
          },
        ],
      },
      {
        year: 2018,
        data: [
          {
            id: 5,
            type: "career",
            position: "Part-time IT Support",
            start: "SEP/2018",
            end: "SEP/2019",
            organization: "SKYSUN Wines Investment Co., Ltd.",
            description: "Maintain office computers and back-up files to NAS.",
          },
        ],
      },
    ],
    extracurricular: {
      type: "Extracurricular Activities",
      list: [
        {
          id: 1,
          start: "2016",
          end: "2019",
          activity: "Paddler of HKUST Dragon Boat Team",
        },
        {
          id: 2,
          start: "2017",
          end: "2018",
          activity: "Vice-President of HKUST Dragon Boat Club",
        },
      ],
    },
  };
  handlescrollProgress() {
    const elem = document.getElementById("timeline-wrap");
    let winScroll = elem.scrollTop;
    let height = elem.scrollHeight - elem.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("timeline-progress-bar").style.width =
      scrolled + "%";
  }
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="exp" className="page">
        <h1 className="page-title load">{this.props.option.title}</h1>
        <main className="page-content load">
          <div className="timeline">
            <div className="item-indicators">
              <div className="item-indicator"><div className="round-sqr left"></div>Career</div>
              <div className="item-indicator"><div className="round-sqr right"></div>Education</div>
            </div>
            <div className="logo1">
              <svg viewBox="0 0 96 40" fill="none">
                <path
                  id="arrow"
                  d="M90.4879 34.9316L48.9724 5.73042L5 33.496"
                  stroke="currentColor"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="current year">{new Date().getFullYear()}</div>
            {this.state.timeline
              .slice()
              .reverse()
              .map((x) => (
                <React.Fragment key={x.year}>
                  <div className="item-container">
                    {x.data.map((d) =>
                    <React.Fragment key={d.id}>
                      {d.type === "career" ? (
                        <React.Fragment>
                          <div className="item-column left">
                            <div className="item">
                              <div className="item-header">
                                <div className="item-duration">
                                  {d.start} ~ {d.end}
                                </div>
                                <p className="item-seperation"></p>
                                <div className="item-title">{d.position}</div>
                              </div>
                              <div className="item-content">
                                <div className="item-content-row">
                                  <p>Organization: </p>
                                  <p className="item-content-row-data">
                                    {d.organization}
                                  </p>
                                </div>
                                <div className="item-content-row">
                                  <p>Job description: </p>
                                  <p className="item-content-row-data">
                                    {d.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-column right"></div>
                          </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div className="item-column left"></div>
                          <div className="item-column right">
                            <div className="item">
                              <div className="item-header">
                                <div className="item-duration">
                                  {d.admission} ~ {d.graduation}
                                </div>
                                <p className="item-seperation"></p>
                                <div className="item-title">{d.degree}</div>
                              </div>
                              <div className="item-content">
                                <div className="item-content-row">
                                  <p>School: </p>
                                  <p className="item-content-row-data">
                                    {d.school}({d.abbrev})
                                  </p>
                                </div>

                                <div className="item-content-row">
                                  <p>Program: </p>
                                  <p className="item-content-row-data">
                                    {d.program}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          </React.Fragment>
                      )}</React.Fragment>
                    )}
                  </div>
                  <div className="year">{x.year}</div>
                </React.Fragment>
              ))}
          </div>
          <div id="3" className="endbar"></div>
        </main>
      </div>
    );
  }
}

export default Exp;

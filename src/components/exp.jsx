import React, { Component } from "react";
import {scrollProgress} from "../animations/anim.js"
class Exp extends Component {
  state = {
    exp: {
      edu: {
        type: "Education",
        list: [
          {
            id: 1,
            degree: "Associate Degree",
            admission: "2014",
            graduation: "2016",
            school: "HKU School of Professional and Continuing Education",
            abbrev: "HKUSPACE",
            program: "Associate of Engineering in Computer Science",
          },
          {
            id: 2,
            degree: "Bachelor Degree",
            admission: "2016",
            graduation: "2019",
            school: "Hong Kong University of Science and Technology",
            abbrev: "HKUST",
            program: "Bachelor of Engineering in Computer Science",
          },
        ],
      },
      career: { type: "Career", list: [] },
      extra: {
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
    },
  };
  handlescrollProgress(){
    const elem = document.getElementById("timeline-wrap");
    let winScroll = elem.scrollTop;
    let height = elem.scrollHeight - elem.clientHeight;
    let scrolled = (winScroll/height)*100;
    document.getElementById("timeline-progress-bar").style.width=scrolled+"%";
    } 
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="exp" className="page">
        <h1 className="page-title load">{this.props.option.title}</h1>
        <main className="page-content load">
          <div onScroll ={this.handlescrollProgress} className="timeline-wrap" id="timeline-wrap">
            <div className="timeline-year">2014</div>
            <div className="timeline-inner-wrap">
              <div className="timeline-unit-box" id="b1">
                <div className="timeline-bar" style={{ order: 1 }}>
                <div className="timeline-bar-items">bar 1</div>
                </div>
                <div className="timeline-bar" style={{ order: 2 }}>
                  <div className="timeline-bar-items"> <span className="timeline-bar-tooltip">test</span> bar 2</div>
                  <div className="timeline-bar-items"> bar 3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-progress-bar-wrap">
            <div className="timeline-progress-bar"id="timeline-progress-bar"></div>
          </div>
          <div id="3" className="endbar"></div>
        </main>
      </div>
    );
  }
}

export default Exp;

import React, { Component } from "react";
class Work extends Component {
  state = {
    work: [
      {
        id: 1,
        title: "Scroll Animation Module",
        link: "https://r7chardgh.github.io/scroll-animation-module/",
        description:
          "A simple scroll animation module by making use of data-* attribute",
        category: "css, js, module",
      },
      {
        id: 2,
        title: "React State Hook Generator",
        link: "https://r7chardgh.github.io/react-state-hook/",
        description:
          "React State Hook Generator, aka the react state code converter. A simple text converter for making state hook easier",
        category: "js, react, converter",
      },
      {
        id: 3,
        title: "HK Weather",
        link: "https://r7chardgh.github.io/hkweather/",
        description:
          "A simple design website integrated with HKO API and Unsplash API",
        category: "weather, api",
      },
      
    ],
    isChanged: false,
  };
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="works" className="page">
        <h1 className="page-title load">{this.props.option.title}</h1>
        <main className="page-content load">
          <div className="work-wrapper">
            {this.state.work.slice().reverse().map((w) => (
              <div className="work-card-wrapper" key={w.id}>
                <a
                  className="work-card-link"
                  href={w.link || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`link to destination`}
                >
                  <div className="work-card-container">
                    <div className="work-card-left">
                      <div className="work-card-title">{w.title}</div>
                      <div className="work-card-cat">
                        {w.category || "no category"}
                      </div>
                    </div>

                    <div className="work-card-desc">
                      {w.description || "no description"}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div id="4" className="endbar"></div>
        </main>
      </div>
    );
  }
}

export default Work;

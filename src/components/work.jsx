import React, { Component } from "react";
class Work extends Component {
  state = {};
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="works" className="page">
        <h1 className="page-title load">{this.props.option.title}</h1>
        <main className="page-content load">
          <div id="4" className="endbar"></div>
        </main>
      </div>
    );
  }
}

export default Work;

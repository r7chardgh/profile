import React, { Component } from "react";
class Work extends Component {
  state = {};
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="works" className="page">
        <h1 className="page-title">{this.props.option.title}</h1>
      </div>
    );
  }
}

export default Work;

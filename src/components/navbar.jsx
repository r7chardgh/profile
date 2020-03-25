import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <div className="nav-wrap">
        <ul className="nav">
          {this.props.options.map(o => (
            <span
              className="nav-link"
              key={o.id}
              id={o.id}
              onClick={() => {
                this.props.onSP(o.id);
              }}
            >
              {o.title}
            </span>
          ))}
        </ul>
      </div>
    );
  }
}

export default NavBar;

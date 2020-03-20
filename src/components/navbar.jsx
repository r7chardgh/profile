import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <div className="nav-wrap">
        <ul className="nav">
          {this.props.options.map(o => (
            <a
              className="nav-link"
              href={o.link}
              key={o.id}
              onClick={() => {
                this.props.onSP(o.id);
              }}
            >
              {o.title}
            </a>
          ))}
        </ul>
      </div>
    );
  }
}

export default NavBar;

import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Pages from "./components/pages.jsx";
import {
  scrollIn,
  fadeIn,
  moveImgPos,
  resetImgPos
} from "./animations/anim.js";

class App extends Component {
  state = {
    options: [
      { id: 1, title: "About Me", link: "#aboutme", isSelected: false },
      { id: 2, title: "Skills", link: "#skills", isSelected: false },
      { id: 3, title: "Exp.", link: "#exp", isSelected: false },
      { id: 4, title: "Works", link: "#works", isSelected: false },
      { id: 5, title: "Contact", link: "#contact", isSelected: false }
    ]
  };
  componentDidMount() {
    // moveFromRight("avatar");
    fadeIn("avatar");
    this.state.options.forEach(o => {
      if (window.location.href.indexOf(o.link) > -1)
        this.handleSwitchPage(o.id);
    });
  }
  handleSwitchPage = id => {
    const options = this.state.options.map(o => {
      if (o.id === id) o.isSelected = true;
      else o.isSelected = false;
      this.lockButton(o.id, o.isSelected);
      return o;
    });
    this.setState({ options });
  };
  lockButton = (id, bool) => {
    if (bool) document.getElementById(id).classList.add("locked-btn");
    else document.getElementById(id).classList.remove("locked-btn");
  };
  render() {
    return (
      <React.Fragment>
        <div className="app">
          <NavBar onSP={this.handleSwitchPage} options={this.state.options} />
          <div className="avatar-wrap">
            <div
              id="avatar"
              className="avatar"
              alt="Avatar"
              onMouseMove={event => {
                moveImgPos(event, "avatar");
              }}
              onMouseLeave={() => {
                resetImgPos("avatar");
              }}
            ></div>
          </div>

          <Pages options={this.state.options} />
        </div>
        <footer>
          <div>Designed by Richard Tsang</div>
          <div>Copyright @year_variable</div>
          </footer>
      </React.Fragment>
    );
  }
}

export default App;

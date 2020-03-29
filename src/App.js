import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Pages from "./components/pages.jsx";
import { fadeIn, moveImgPos, resetImgPos } from "./animations/anim.js";

class App extends Component {
  state = {
    options: [
      {
        id: 1,
        title: "About Me",
        link: "#aboutme",
        isSelected: false,
        faClass: "fas fa-id-card"
      },
      {
        id: 2,
        title: "Skills",
        link: "#skills",
        isSelected: false,
        faClass: "fas fa-id-card"
      },
      {
        id: 3,
        title: "Exp.",
        link: "#exp",
        isSelected: false,
        faClass: "fas fa-id-card"
      },
      {
        id: 4,
        title: "Works",
        link: "#works",
        isSelected: false,
        faClass: "fas fa-id-card"
      },
      {
        id: 5,
        title: "Contact",
        link: "#contact",
        isSelected: false,
        faClass: "fas fa-id-card"
      }
    ]
  };

  componentDidMount() {
    fadeIn("avatar");
    this.state.options.forEach(o => {
      if (window.location.href.indexOf(o.link) > -1)
        this.handleSwitchPage(o.id);
    });
  }
  componentDidUpdate() {
    document.getElementById("avatar").classList.add("a-f");
    document.getElementById("avatar-wrap").classList.add("aw-f");
    document.getElementById("a-t").style.display = "none";
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
          <div id="avatar-wrap" className="avatar-wrap">
            <div
              id="avatar"
              className="avatar avatar-anim"
              alt="Avatar"
              onMouseOver={() => {
                document
                  .getElementById("avatar")
                  .classList.remove("avatar-anim");
                document
                  .getElementById("a-t")
                  .classList.remove("avatar-text-anim");
              }}
              onMouseMove={event => {
                moveImgPos(event, "avatar");
              }}
              onMouseLeave={() => {
                resetImgPos("avatar");
              }}
            ></div>
            <span id="a-t" className="avatar-text avatar-text-anim">
              Richard Tsang
            </span>
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

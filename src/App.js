import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Pages from "./components/pages.jsx";
import { moveFromRight, moveImgPos, resetImgPos } from "./animations/anim.js";
import avatar from "./images/avatar.jpg";

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
    this.state.options.forEach(o => {
      if (window.location.href.indexOf(o.link) > -1)
        this.handleSwitchPage(o.id);
    });
  }
  handleSwitchPage = id => {
    const options = this.state.options.map(o => {
      if (o.id === id) o.isSelected = true;
      else o.isSelected = false;
      return o;
    });
    this.setState({ options });
  };

  render() {
    return (
      <React.Fragment>
        <div className="app">
          <NavBar onSP={this.handleSwitchPage} options={this.state.options} />
          <div className="avatar-wrap">
            <img
              id="avatar"
              className="avatar"
              src={avatar}
              alt="Avatar"
              onMouseMove={event => {
                moveImgPos(event, "avatar");
              }}
              onMouseLeave={() => {
                resetImgPos("avatar");
              }}
            />
          </div>

          <Pages options={this.state.options} />
        </div>
        <div className="footer">Designed by Richard Tsang copyright @2020</div>
      </React.Fragment>
    );
  }
}

export default App;

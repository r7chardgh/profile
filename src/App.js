import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Pages from "./components/pages.jsx";
import {
  scrollIntoElem,
  insertPhoto,
  fadeIn,
  moveImgPos,
  resetImgPos,
} from "./animations/anim.js";

class App extends Component {
  state = {
    options: [
      {
        id: 1,
        title: "About Me",
        link: "#aboutme",
        isSelected: false,
        isFocus: false,
      },
      {
        id: 2,
        title: "Skills",
        link: "#skills",
        isSelected: false,
        isFocus: false,
      },
      {
        id: 3,
        title: "Exp.",
        link: "#exp",
        isSelected: false,
        isFocus: false,
      },
      {
        id: 4,
        title: "Works",
        link: "#works",
        isSelected: false,
        isFocus: false,
      },
      {
        id: 5,
        title: "Contact",
        link: "#contact",
        isSelected: false,
        isFocus: false,
      },
    ],
    lastTop: 0,
    clickBtn: false,
  };
  componentDidMount() {
    fadeIn("avatar");
    this.state.options.forEach((o) => {
      console.log(window.location.href);
      if (window.location.href.indexOf(o.link) > -1)
        this.handleSwitchPage(o.id);
      else console.log("...");
    });
  }
  componentDidUpdate() {
    // transitPage("trans-wrap");resetImgPos("avatar");

    insertPhoto("avatar");
    console.log("app-updated");
  }
  handleScroll = () => {
    const elemId = document.getElementById("page");
    const target = document.getElementsByClassName("endbar");
    const Uptarget = document.getElementsByClassName("endbar-done");
    const { options } = this.state;
    let focusPoint = null;
    let newTop = elemId.scrollTop;
    // if (options.find((o) => o.isClicked === true)) {
    //   console.log("Don't disturb the process.");
    // } else {
    if (newTop > this.state.lastTop) {
      Array.prototype.forEach.call(target, function (e) {
        if (elemId.offsetHeight >= e.getBoundingClientRect().top) {
          focusPoint = parseInt(e.id) + 1;
          e.className += "-done";
          console.log("down" + focusPoint);
        }
      });
    } else {
      Array.prototype.forEach.call(Uptarget, function (e) {
        if (e.getBoundingClientRect().top >= elemId.offsetHeight) {
          focusPoint = parseInt(e.id);
          e.className = "endbar";
          console.log("up" + focusPoint);
        }
      });
    }
    this.state.lastTop = newTop <= 0 ? 0 : newTop;

    if (focusPoint >= 1) {
      const options = this.state.options.map((o) => {
        if (o.id === focusPoint) {
          o.isSelected = true;
          o.isFocus = true;
        }
        // o.isFocus
        else o.isSelected = false;

        this.lockButton(o.id, o.isSelected);

        return o;
      });
      this.setState({ options });
    }
    // }
  };

  handleSwitchPage = (id) => {
    document.getElementById("avatarLight").style.animation = "none";
    document.getElementById("avatar").classList = "avatar a-f";
    document.getElementById("avatar-shield").style.pointerEvents = "auto";
    document.getElementById("avatar-wrap").classList.add("aw-f");
    document.getElementById("a-t").style.display = "none";
    const options = this.state.options.map((o) => {
      // if (o.id <= id) {
      //   o.isSelected = true;
      // }
      if (o.id === id) {
        o.isSelected = true;
        // o.isFocus = true;
      } else {
        o.isSelected = false;
        // o.isFocus = false;
      }
      this.lockButton(o.id, o.isSelected);
      return o;
    });

    this.setState({ options });
  };
  lockButton = (id, bool) => {
    if (bool) document.getElementById(id).classList.add("locked-btn");
    else document.getElementById(id).classList.remove("locked-btn");
  };
  resetClickBtn = () => {
    console.log("success!");
    const { clickBtn } = this.state;
    this.setState({ clickBtn: false });
  };
  render() {
    return (
      <React.Fragment>
        <div className="app">
          {/* <span id="trans-wrap" className="transitAni-wrap">
            <span id="trans1" className="transN"></span>
            <span id="trans2" className="transN"></span>
            <span id="trans3" className="transN"></span>
          </span> */}
          <NavBar
            resetCB={this.resetClickBtn}
            onSP={this.handleSwitchPage}
            options={this.state.options}
          />
          <Pages onScr={this.handleScroll} options={this.state.options} />
          <div id="avatar-wrap" className="avatar-wrap">
            <div
              id="avatar"
              className="avatar"
              alt="Avatar"
              onClick={() => this.handleSwitchPage(1)}
              // onMouseOver={() => {
              //   document
              //     .getElementById("avatar")
              //     .classList.remove("avatar-anim");
              //   document
              //     .getElementById("a-t")
              //     .classList.remove("avatar-text-anim");
              // }}
              onMouseMove={(event) => {
                moveImgPos(event, "avatar");
              }}
              onMouseLeave={() => {
                resetImgPos("avatar");
              }}
            ></div>
            <a
              href={window.location.href.substr(
                0,
                window.location.href.lastIndexOf("/")
              )}
              id="avatar-shield"
              className="avatar-shield"
            ></a>
            <span id="a-t" className="avatar-text">
              <p className="typing">Richard Tsang</p>
            </span>
            <div id="avatarLight" className="avatarLight"></div>
          </div>
        </div>
        <footer className="footer">
          <div>Designed by Richard Tsang</div>
          <div>Copyright @year_variable</div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;

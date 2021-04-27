import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Pages from "./components/pages.jsx";
import backdropJpeg from "./images/IMG_05841.JPG";
import backdropWebp from "./images/IMG_05841.webp";

import {
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
        isHover:false
      },
      {
        id: 2,
        title: "Skills",
        link: "#skills",
        isSelected: false,
        isFocus: false,
        isHover:false
      },
      {
        id: 3,
        title: "Exp.",
        link: "#exp",
        isSelected: false,
        isFocus: false,
        isHover:false
      },
      {
        id: 4,
        title: "Works",
        link: "#works",
        isSelected: false,
        isFocus: false,
        isHover:false
      },
      {
        id: 5,
        title: "Contact",
        link: "#contact",
        isSelected: false,
        isFocus: false,
        isHover:false
      }
    ],
    // lastTop: 0,
    clickBtn: false,
    avatarIsCover:true,
    workKey:false
  };
  componentDidMount() {
    fadeIn("avatar");
    this.state.options.forEach((o) => {
      if (window.location.href.indexOf(o.link) > -1)
        this.handleSwitchPage(o.id);
    });
  }
  componentDidUpdate() {
    // transitPage("trans-wrap");resetImgPos("avatar");
    insertPhoto("avatar");
  }
  handleScroll = () => {
    const elemId = document.getElementById("page");
    const target = document.getElementsByClassName("endbar");
    // const Uptarget = document.getElementsByClassName("endbar-done");
    
    let focusPoint = null;
    // let newTop = elemId.scrollTop;
    // if (options.find((o) => o.isClicked === true)) {
    //   console.log("Don't disturb the process.");
    // } else {
    // if (newTop > this.state.lastTop) {
      Array.prototype.forEach.call(target, function (e) {
        if (elemId.offsetHeight >= e.getBoundingClientRect().top) {
          focusPoint = parseInt(e.id) + 1;
          e.className += "-done";
          console.log("down" + focusPoint);
        }
      });
    // } else {
    //   Array.prototype.forEach.call(Uptarget, function (e) {
    //     if (e.getBoundingClientRect().top >= elemId.offsetHeight) {
    //       focusPoint = parseInt(e.id);
    //       e.className = "endbar";
    //       console.log("up" + focusPoint);
    //     }
    //   });
    // }
    // this.state.lastop = newTop <= 0 ? 0 : newTop;

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
    if(this.state.avatarIsCover){
      document.getElementById("avatarLight").style.animation = "none";
    document.getElementById("avatar").classList = "avatar a-f";
    document.getElementById("avatar-shield").style.pointerEvents = "auto";
    document.getElementById("avatar-wrap").classList.add("aw-f");
    document.getElementById("a-t").style.display = "none";
    }
    const avatarIsCover = false;
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
    let {workKey} = this.state;
    if(id===4) workKey = !workKey;

    this.setState({ options,avatarIsCover,workKey });
  };
  lockButton = (id, bool) => {
    if (bool) document.getElementById(id).classList.add("locked-btn");
    else document.getElementById(id).classList.remove("locked-btn");
  };
  resetClickBtn = () => {
    console.log("success!");
    this.setState({ clickBtn: false });
  };
  setAvatarState=()=>{
    const avatarIsCover = true;
    this.setState({avatarIsCover});
  }
  reSetWorkState=()=>{
    const workIsChanged = false;
    this.setState({workIsChanged});
  }
  updateWorkState=()=>{
    const workIsChanged = true;
    this.setState({workIsChanged});
  }
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
          <Pages onScr={this.handleScroll} options={this.state.options} workKey={this.state.workKey}/>
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
            ><picture>
            <source srcSet={backdropWebp} type="image/webp"/>
            <source srcSet={backdropJpeg} type="image/jpeg"/>
            <img src={backdropJpeg} alt="Me wearing a white dragon boat team hoodies, christmas lights backdrop"/>
          </picture></div>
            <a
              href={window.location.href.substr(
                0,
                window.location.href.lastIndexOf("/")
              )}
              id="avatar-shield"
              className="avatar-shield"
              onClick={this.setAvatarState}
              aria-label="link to homepage"
            ></a>
            <span id="a-t" className="avatar-text">
              <p className="typing">Richard Tsang</p>
            </span>
            {/* <video  className="avatarLight" width="320" height="240" autoplay="autoplay" loop>
  <source src="/movie.mp4" type="video/mp4"/>    
  Your browser does not support the video tag.
</video> */}
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

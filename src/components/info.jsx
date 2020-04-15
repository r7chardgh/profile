import React, { Component } from "react";
import { scrollIn } from "../animations/anim.js";
import photo1 from "../images/avatar.jpg";
class Info extends Component {
  state = {
    person:{
      name:"Richard Tsang",
      langs:[{type:"English",level:"Advanced"}, {type:"Cantonese",level:"Native"}, {type:"Mandarin",level:"Advanced"}],
      living:"Hong Kong",
      blog:[{type:"IT Blog", link:"https://blog.3bro.info/"},{type:"Personal Blog", link:"https://richard.3bro.info/"}],
      email:"richardtcfung@gmail.com",
      intro:"Fresh graduated computer-science student looking for fun and challenging career in web developing field. Passionate about solving puzzles and creating things."
    }
  };
  render() {
    if (!this.props.option.isSelected) return null;

    return (
      <div id="aboutme" onScroll={() => scrollIn("aboutme")} className="page">
        <h1 className="page-title">{this.props.option.title}</h1>
        <main className="page-content">
    <div className="scroll-Target info-wrap scrolled"><span id="info-tag">#tag: </span><span id="info-data">{this.state.person.name}</span></div>
          <div className="scroll-Target info-wrap scrolled"><span id="info-tag">#tag: </span><span id="info-data">{this.state.person.living}</span></div>
          <div className="scroll-Target info-wrap scrolled"><span id="info-tag">#tag: </span><span id="info-data">{this.state.person.intro}</span></div>
          <div className="scroll-Target info-wrap scrolled"><span id="info-tag">#tag: </span><span id="info-data">{this.state.person.email}</span></div>
          <div className="scroll-Target info-wrap scrolled"><span id="info-tag">#tag: </span>{this.state.person.langs.map(b=><span key={b.type}>{b.type}:{b.level}</span>)}</div>
    <div className="scroll-Target info-wrap scrolled"><span id="info-tag">#tag: </span>{this.state.person.blog.map(b=><span key={b.type}>{b.type}:{b.link}</span>)}</div>

          <div className="card-wrap">
            <img className="card-image" src="../images/avatar.jpg" alt="card" />
            <div className="card-text">This is random text.</div>
          </div>
          <div className="card-wrap">
            <img className="card-image" src="../images/avatar.jpg" alt="card" />
            <div className="card-text">This is random text.</div>
          </div>
          <div className="card-wrap">
            <img className="card-image" src={photo1} alt="card" />
            <div className="card-text">This is random text.</div>
          </div>
        </main>
      </div>
    );
  }
}

export default Info;

import React, { Component } from "react";
class Skill extends Component {
  state = {
    skill:{
      cLang:[{type:"Html",level:"familiar"},{type:"JavaScript",level:"familiar"},{type:"CSS",level:"familiar"},{type:"React.js",level:"familiar"},{type:"C++",level:"capable"},{type:"jQeury",level:"capable"}],
      tool:[{type:"coding",name:"VSCode"}, {type:"drawing", name:"GIMP"}],
      comp:[]
    }
  };
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="skills" className="page">
        <h1 className="page-title">{this.props.option.title}</h1>
        <main className="page-content">
    <div className="info-wrap"><span id="info-tag">#tag: </span>{this.state.skill.cLang.map(b=><span key={b.type}>{b.type}:{b.level}</span>)}</div>
    <div className="info-wrap"><span id="info-tag">#tag: </span>{this.state.skill.tool.map(b=><span key={b.type}>{b.type}:{b.name}</span>)}</div> 
        </main>
      </div>
    );
  }
}

export default Skill;

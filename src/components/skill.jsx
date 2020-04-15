import React, { Component } from "react";
class Skill extends Component {
  state = {
    skill:{
      cLang:[{type:"Html",level:"familiar"},{type:"JavaScript",level:"familiar"},{type:"CSS",level:"familiar"},{type:"C++",level:"capable"}],
      tool:[{type:"coding",name:"VSCode"}, {type:"drawing", name:"GIMP"}],
      comp:[]
    }
  };
  render() {
    if (!this.props.option.isSelected) return null;
    return (
      <div id="skills" className="page">
        <h1 className="page-title">{this.props.option.title}</h1>
      </div>
    );
  }
}

export default Skill;

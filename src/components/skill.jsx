import React from "react";

const Skill = props => {
  if (!props.option.isSelected) return null;
  return (
    <div id="skills" className="page-content">
      <h1>{props.option.title}</h1>
    </div>
  );
};

export default Skill;

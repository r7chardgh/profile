import React from "react";

const Skill = props => {
  if (!props.option.isSelected) return null;
  return (
    <div
      style={{
        height: "1080px",
        backgroundColor: "red"
      }}
      id="skills"
    >
      <h1>{props.option.title}</h1>
    </div>
  );
};

export default Skill;

import React from "react";
const Work = props => {
  if (!props.option.isSelected) return null;
  return (
    <div
      style={{
        height: "1080px",
        backgroundColor: "red"
      }}
      id="works"
    >
      <h1>{props.option.title}</h1>
    </div>
  );
};

export default Work;

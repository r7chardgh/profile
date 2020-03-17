import React from "react";
const Work = props => {
  if (!props.option.isSelected) return null;
  return (
    <div id="works">
      <h1>{props.option.title}</h1>
    </div>
  );
};

export default Work;

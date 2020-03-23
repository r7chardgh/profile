import React from "react";
const Work = props => {
  if (!props.option.isSelected) return null;
  return (
    <div id="works" className="page-content">
      <h1 className="page-title">{props.option.title}</h1>
    </div>
  );
};

export default Work;

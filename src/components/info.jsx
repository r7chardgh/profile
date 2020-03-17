import React from "react";

const Info = props => {
  if (!props.option.isSelected) return null;

  return (
    <div id="aboutme">
      <h1>{props.option.title}</h1>
    </div>
  );
};

export default Info;

import React from "react";
const Exp = props => {
  if (!props.option.isSelected) return null;
  return (
    <div id="exp">
      <h1>{props.option.title}</h1>
    </div>
  );
};

export default Exp;

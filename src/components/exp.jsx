import React from "react";
const Exp = props => {
  if (!props.option.isSelected) return null;
  return (
    <div
      style={{
        height: "1080px",
        backgroundColor: "red"
      }}
      id="exp"
    >
      <h1>{props.option.title}</h1>
    </div>
  );
};

export default Exp;

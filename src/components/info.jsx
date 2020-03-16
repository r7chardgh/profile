import React from "react";

const Info = props => {
  if (!props.option.isSelected) return null;

  return (
    <div
      style={{
        height: "1080px",
        backgroundColor: "red"
      }}
      id="aboutme"
    >
      <h1>{props.option.title}</h1>
    </div>
  );
};

export default Info;

import React from "react";
const Contact = props => {
  if (!props.option.isSelected) return null;
  return (
    <div
      style={{
        height: "1080px",
        backgroundColor: "red"
      }}
      id="contact"
    >
      <h1>{props.option.title}</h1>
    </div>
  );
};

export default Contact;

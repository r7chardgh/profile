import React from "react";
const Contact = props => {
  if (!props.option.isSelected) return null;
  return (
    <div id="contact" className="page-content">
      <h1>{props.option.title}</h1>
    </div>
  );
};

export default Contact;

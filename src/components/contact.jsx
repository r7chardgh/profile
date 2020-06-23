import React from "react";
const Contact = (props) => {
  if (!props.option.isSelected) return null;
  return (
    <div id="contact" className="page">
      <h1 className="page-title load">{props.option.title}</h1>
      <main className="page-content load"></main>
    </div>
  );
};

export default Contact;

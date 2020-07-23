import React from "react";
const Contact = (props) => {
  if (!props.option.isSelected) return null;
  return (
    <div id="contact" className="page">
      <h1 className="page-title load">{props.option.title}</h1>
      <main className="page-content load">
        <p className="contactMsg">
          Whether you have any questions for me or comments about my website,
          feel free to send me an email:
        </p>
        <button type="text" value="richardtcfung@gmail.com" id="myEmail">
          <span className="copyText">richardtcfung@gmail.com</span>
        </button>
        <span className="copyTooltip">Click to Copy!</span>
        <p className="contactMsg">I am all ears.</p>
      </main>
    </div>
  );
};

export default Contact;

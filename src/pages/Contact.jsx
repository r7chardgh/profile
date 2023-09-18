import React from "react";
import Icon from "../components/Icon";
import copy from "../helpers/copy";
function Contact({ contact }) {
  return (
    <div id="contact" className="container">
      <h1 className="title">Hello mate!</h1>
      <p className="contact-message">You can find my footprints at the link below</p>
      <ul className="contact-list">
        {contact.length > 0 ? (
          contact.map((item) => (
            <li className="contact-item" key={item.id}>
              <Icon id={item.icon} className="social icon" />

              {item.isCopy ? (
                <>
                  <input
                    type="text"
                    value={item.value}
                    id="email"
                    className="copy-text"
                    aria-label={`${item.name} link, click to copy`}
                    onBlur={(e) => {
                      e.target.nextSibling.classList.remove("confirm");
                    }}
                    onClick={(e) => {
                      copy(`#${e.target.id}`);
                    }}
                    readOnly
                  />
                  <span className="copy-tag">copied</span>
                </>
              ) : (
                <>
                  <a
                    className="contact-item__link"
                    href={item.value}
                    target="_blank"
                    aria-label={`${item.name} link`}
                  >
                    <h2 className="contact-item__title"> {item.name}</h2>
                    <span className="link-tag">{item.value}</span>
                  </a>
                </>
              )}
            </li>
          ))
        ) : (
          <h1>No Contact</h1>
        )}
      </ul>
    </div>
  );
}

export default Contact;

import React from "react";
import Icon from "../components/Icon";
function Contact({ contact }) {
  return (
    <div id="contact" className="container">
      <h1 className="title">Hello mate!</h1>
      <p className="message">You can find my footprints at the link below</p>
      <ul className="contact-list">
        {contact.length > 0 ? (
          contact.map((item) => (
            <li className="contact-item" key={item.id}>
              <Icon id={item.icon} className="social icon" />

              {item.isCopy ? (
                <>
                  <h2
                    className="copy-text"
                    aria-label={`${item.name} link, click to copy`}
                  >
                    {item.value}
                  </h2>
                  <span className="copy-tag confirm">copied</span>
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

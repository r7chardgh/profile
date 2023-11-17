import React from "react";
import Icon from "../components/Icon";
import copy from "../helpers/copy";
function Contact({ contact }) {
  return (
    <section id="contact" className="container">
      <h1 className="title">Get in touch</h1>
      <p className="contact-message">You can find my footprints at...</p>
      <ul className="contact-list">
        {contact.length > 0 ? (
          contact.map((item) => (
            <li className="contact-item" key={item.id}>
              <Icon id={item.icon} className="contact-item__icon" />

              {item.isCopy ? (
                <>
                  <div className="input-wrap">
                    <input
                      type="text"
                      value={item.value}
                      id={item.name}
                      className="copy-text"
                      aria-label={`${item.name} link, click to copy`}
                      onBlur={(e) => {
                        e.target.nextSibling.classList.remove("confirm");
                      }}
                      onClick={(e) => {
                        copy(`#${e.target.id}`);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          copy(`#${e.target.id}`);
                        }
                      }}
                      readOnly
                    />
                    <span className="copy-tag">copied!</span>
                    <Icon id="clipboard" className="svg-clipboard" />
                  </div>
                </>
              ) : (
                <>
                  <a
                    className="contact-item__link"
                    href={item.value}
                    target="_blank"
                    aria-label={`${item.name} link`}
                  >
                    <h2 className="contact-item__title">
                      {item.name}
                      <Icon id="hyperlink" className="svg-hyperlink" />
                    </h2>
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
    </section>
  );
}

export default Contact;

import React from "react";
import Icon from "../components/Icon";
import draggable from "../helpers/draggable";
function Works({ works=true }) {
  React.useEffect(() => {
    if (!!works) {
      draggable.init(".carousel");
    }
  }, []);

  return (
    <>
      <div id="works" className="container">
        <h1 className="title">My works...</h1>
        {!!works ? (
          <div className="slide">
            <div className="carousel">
              <div className="work-item">
                <span className="work-item__order">1</span>
                <h1 className="work-item__title">scroll-animation-module</h1>
                <h2 className="work-item__description">
                  This is my first js module for scrolling animation. By simply
                  adding a specific data attribute to the element, you can see
                  the "fade-in" animation when scrolling. This is my first js
                  module for scrolling animation. By simply adding a specific
                  data attribute to the element, you can see the "fade-in"
                  animation when scrolling.
                </h2>
                <a
                  href="https://r7chardgh.github.io/scroll-animation-module/"
                  target="_blank"
                  className="work-item__link"
                >
                  go to the site
                  <Icon id="hyperlink" className="work-item__link-icon" />
                </a>
              </div>
              <div className="work-item">
                <h1 className="work-item__title">scroll-animation-module</h1>
                <h2 className="work-item__description">
                  This is my first js module for scrolling animation. By simply
                  adding a specific data attribute to the element, you can see
                  the "fade-in" animation when scrolling. This is my first js
                  module for scrolling animation. By simply adding a specific
                  data attribute to the element, you can see the "fade-in"
                  animation when scrolling.
                </h2>
                <a
                  href="https://r7chardgh.github.io/scroll-animation-module/"
                  target="_blank"
                  className="work-item__link"
                >
                  go to the site
                  <Icon id="hyperlink" className="work-item__link-icon" />
                </a>
              </div>
              <div className="work-item">
                <h1 className="work-item__title">scroll-animation-module</h1>
                <h2 className="work-item__description">
                  This is my first js module for scrolling animation. By simply
                  adding a specific data attribute to the element, you can see
                  the "fade-in" animation when scrolling. This is my first js
                  module for scrolling animation. By simply adding a specific
                  data attribute to the element, you can see the "fade-in"
                  animation when scrolling.
                </h2>
                <a
                  href="https://r7chardgh.github.io/scroll-animation-module/"
                  target="_blank"
                  className="work-item__link"
                >
                  go to the site
                  <Icon id="hyperlink" className="work-item__link-icon" />
                </a>
              </div>
              <div className="work-item">
                <h1 className="work-item__title">scroll-animation-module</h1>
                <h2 className="work-item__description">
                  This is my first js module for scrolling animation. By simply
                  adding a specific data attribute to the element, you can see
                  the "fade-in" animation when scrolling. This is my first js
                  module for scrolling animation. By simply adding a specific
                  data attribute to the element, you can see the "fade-in"
                  animation when scrolling.
                </h2>
                <a
                  href="https://r7chardgh.github.io/scroll-animation-module/"
                  target="_blank"
                  className="work-item__link"
                >
                  go to the site
                  <Icon id="hyperlink" className="work-item__link-icon" />
                </a>
              </div>
              <div className="work-item">
                <h1 className="work-item__title">scroll-animation-module</h1>
                <h2 className="work-item__description">
                  This is my first js module for scrolling animation. By simply
                  adding a specific data attribute to the element, you can see
                  the "fade-in" animation when scrolling. This is my first js
                  module for scrolling animation. By simply adding a specific
                  data attribute to the element, you can see the "fade-in"
                  animation when scrolling.
                </h2>
                <a
                  href="https://r7chardgh.github.io/scroll-animation-module/"
                  target="_blank"
                  className="work-item__link"
                >
                  go to the site
                  <Icon id="hyperlink" className="work-item__link-icon" />
                </a>
              </div>
              <div className="work-item">
                <h1 className="work-item__title">scroll-animation-module</h1>
                <h2 className="work-item__description">
                  This is my first js module for scrolling animation. By simply
                  adding a specific data attribute to the element, you can see
                  the "fade-in" animation when scrolling. This is my first js
                  module for scrolling animation. By simply adding a specific
                  data attribute to the element, you can see the "fade-in"
                  animation when scrolling.
                </h2>
                <a
                  href="https://r7chardgh.github.io/scroll-animation-module/"
                  target="_blank"
                  className="work-item__link"
                >
                  go to the site
                  <Icon id="hyperlink" className="work-item__link-icon" />
                </a>
              </div>
              <div className="work-item">
                <h1 className="work-item__title">scroll-animation-module</h1>
                <h2 className="work-item__description">
                  This is my first js module for scrolling animation. By simply
                  adding a specific data attribute to the element, you can see
                  the "fade-in" animation when scrolling. This is my first js
                  module for scrolling animation. By simply adding a specific
                  data attribute to the element, you can see the "fade-in"
                  animation when scrolling.
                </h2>
                <a
                  href="https://r7chardgh.github.io/scroll-animation-module/"
                  target="_blank"
                  className="work-item__link"
                >
                  go to the site
                  <Icon id="hyperlink" className="work-item__link-icon" />
                </a>
              </div>
              <div className="work-item">
                <h1 className="work-item__title">scroll-animation-module</h1>
                <h2 className="work-item__description">
                  This is my first js module for scrolling animation. By simply
                  adding a specific data attribute to the element, you can see
                  the "fade-in" animation when scrolling. This is my first js
                  module for scrolling animation. By simply adding a specific
                  data attribute to the element, you can see the "fade-in"
                  animation when scrolling.
                </h2>
                <a
                  href="https://r7chardgh.github.io/scroll-animation-module/"
                  target="_blank"
                  className="work-item__link"
                >
                  go to the site
                  <Icon id="hyperlink" className="work-item__link-icon" />
                </a>
              </div>
              <div className="work-item">
                <h1 className="work-item__title">scroll-animation-module</h1>
                <h2 className="work-item__description">
                  This is my first js module for scrolling animation. By simply
                  adding a specific data attribute to the element, you can see
                  the "fade-in" animation when scrolling. This is my first js
                  module for scrolling animation. By simply adding a specific
                  data attribute to the element, you can see the "fade-in"
                  animation when scrolling.
                </h2>
                <a
                  href="https://r7chardgh.github.io/scroll-animation-module/"
                  target="_blank"
                  className="work-item__link"
                >
                  go to the site
                  <Icon id="hyperlink" className="work-item__link-icon" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <h2>No work is found.</h2>
        )}
      </div>
    </>
  );
}

export default Works;

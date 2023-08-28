import React from "react";

function PageNotFound() {
  return (
    <section className="container page-not-found">
      <h1 className="title">404</h1>
      <section className="content">
        <div className="blob">
          <img
            className="profile-picture"
            src="./src/assets/images/propic.png"
            alt="richard tsang profile picture"
          />
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <path id="blob" d="">
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M427,295Q391,340,358.5,378Q326,416,273.5,434.5Q221,453,174,422.5Q127,392,114.5,343Q102,294,78,243Q54,192,75.5,133Q97,74,159.5,63.5Q222,53,282.5,49.5Q343,46,394,85Q445,124,454,187Q463,250,427,295Z;
 M455,302Q411,354,375.5,401Q340,448,279,459.5Q218,471,180,423Q142,375,77.5,347.5Q13,320,19.5,252Q26,184,81.5,152Q137,120,176.5,66Q216,12,279.5,29Q343,46,373.5,98.5Q404,151,451.5,200.5Q499,250,455,302Z;                                                                               M472.5,315.5Q454,381,397,414Q340,447,279.5,458Q219,469,164.5,440.5Q110,412,102,354Q94,296,56,239Q18,182,63,134Q108,86,165.5,72.5Q223,59,273,74.5Q323,90,386.5,106Q450,122,470.5,186Q491,250,472.5,315.5Z;
                                       M427,295Q391,340,358.5,378Q326,416,273.5,434.5Q221,453,174,422.5Q127,392,114.5,343Q102,294,78,243Q54,192,75.5,133Q97,74,159.5,63.5Q222,53,282.5,49.5Q343,46,394,85Q445,124,454,187Q463,250,427,295Z;"
              ></animate>
            </path>
          </svg>
        </div>
        <span className="message">
          <h2 className="message--large">oops!</h2>
          <h3 className="message--medium">we couldn't find that page.</h3>
          <p className="message--small">
            maybe you can find what you need here?
          </p>
        </span>
      </section>
    </section>
  );
}

export default PageNotFound;

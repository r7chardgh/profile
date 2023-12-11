import React from "react";
import time from "../helpers/time";
import useScrollToShow from "../hooks/useScrollToShow";
function Footer() {
  //const { isRevealed } = useScrollToShow(".back-to-top");
  return (
    <footer>
      <p className="end-line">
        This website is made with ❤. © Copyright {time.getYear()}.
      </p>
      {/* {isRevealed ? ( 
        <button
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
          className="back-to-top"
        >
          Top
        </button>
      ) : null} */}
    </footer>
  );
}

export default Footer;

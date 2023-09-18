import React from "react";
import time from "../helpers/time";
import useScrollToShow from "../hooks/useScrollToShow";
function Footer() {
  const {isRevealed}  = useScrollToShow('.back-to-top');
  return (
    <footer>
      <p className="end-line">
        This website is made with ❤. © Copyright {time.getYear()}.|
        <span className="social-badge">
        </span>
      </p>
      <span className="back-to-top">Top{isRevealed}</span>
    </footer>
  );
}

export default Footer;

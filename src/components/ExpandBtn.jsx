import React from "react";
function ExpandBtn({ toggle, isRevealed }) {
  return (
    <button
      className="btn btn--skill-reveal"
      onClick={() => {
        toggle(!isRevealed);
      }}
    >
      {isRevealed ? "show less" : "show more..."}
    </button>
  );
}

export default ExpandBtn;

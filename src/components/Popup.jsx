import React from "react";

function Popup({ url }) {
  function buttonClicked(isLeaving) {
    if(isLeaving){
        window.location.href = "https://github.com/r7chardgh";
    }else{

    }
  }
  return (
    <div
      style={{
        position: "fixed",
        background: "red",
        width: "100%",
        top: "50%",
        left: "0",
        zIndex: 999,
        padding: "1rem",
        transform: "translateY(-50%)",
      }}
    >
      Are you sure you want to leave this page?
      <button
        onClick={() => {
          buttonClicked(false);
        }}
      >
        Stay on Page
      </button>
      <button
        onClick={() => {
          buttonClicked(true);
        }}
      >
        Leave Page
      </button>
    </div>
  );
}

export default Popup;

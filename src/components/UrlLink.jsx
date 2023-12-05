import React from "react";

const UrlLink = ({ url, ...props }) => {
  return (
    <button
      {...props}
      className={props.className + " btn--reset"}
      onClick={() => {
        if (
          confirm(
            `You are about to open another browser tab and visit: \n${url}`
          )
        ) {
          window.open(url, "_blank");
        }
      }}
    >
      {props.children}
    </button>
  );
};

export default UrlLink;

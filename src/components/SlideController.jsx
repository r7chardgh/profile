import React, { useRef } from "react";
import Icon from "./Icon";
function SlideController({ moveToItem, pos, slideLength }) {
  return (
    <div className="slide__controller-wrap hidden">
      <button
        onClick={() => {
          moveToItem(pos - 1);
        }}
        className={
          `slide__controller slide__controller--left ` +
          (pos > 0 ? `` : `hidden`)
        }
        alt="previous work item"
        id="prev"
      >
        <Icon id="previous" className="controller-icon" />
      </button>

      <button
        onClick={() => {
          moveToItem(pos + 1);
        }}
        className={
          `slide__controller slide__controller--right ` +
          (pos < slideLength ? `` : `hidden`)
        }
        alt="next work item"
        id="next"
      >
        <Icon id="next" className="controller-icon" />
      </button>
    </div>
  );
}

export default SlideController;

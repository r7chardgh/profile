import React, { useRef } from "react";
import Icon from "../components/Icon";
import SlideController from "../components/SlideController";
function Works({ works }) {
  let isDown = false;
  let startX;
  let scrollLeft;
  const ref = useRef(null);
  const [pos, setPos] = React.useState(0);
  let touchStartX;
  let touchMoveX;

  React.useEffect(() => {
    if (ref.current?.children.length > 0) {
      document
        .querySelector(".slide__controller-wrap")
        .classList.remove("hidden");
    }
  }, []);
  //when pos change,
  // React.useEffect(() => {
  //   console.log("what is pos ", pos);

  //   ref.current.style.scrollBehavior = "smooth";
  //   ref.current.scrollLeft = ref.current?.children[pos].offsetLeft;
  //   ref.current.style.scrollBehavior = "auto";
  // }, [pos]);
  //function
  const mouseDown = (e) => {
    isDown = true;
    ref.current.classList.add("active");
    startX = e.pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft;
  };
  const mouseLeave = () => {
    isDown = false;
    ref.current.classList.remove("active");
  };
  const mouseUp = () => {
    isDown = false;
    ref.current.classList.remove("active");

    if (!window.matchMedia("(pointer: coarse)").matches) {
      ref.current.style.scrollBehavior = "smooth";
      ref.current.scrollLeft =
        ref.current?.children[
          Math.round(
            ref.current.scrollLeft / ref.current.children[1].offsetLeft
          )
        ].offsetLeft;
      ref.current.style.scrollBehavior = "auto";
    }
    setPos(
      Math.round(ref.current.scrollLeft / ref.current.children[1].offsetLeft)
    );
  };
  const mouseMove = (e) => {
    if (!isDown) return;
    // e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = x - startX;
    if (!window.matchMedia("(pointer: coarse)").matches) {
      ref.current.scrollLeft = scrollLeft - walk;
    }
  };
  const moveToItem = (pos) => {
    if (!!ref.current && (pos >= 0 || pos < ref.current?.children.length)) {
     
      ref.current.style.scrollBehavior = "smooth";

      ref.current.scrollLeft = ref.current?.children[pos].offsetLeft;

      ref.current.style.scrollBehavior = "auto";
      setPos(pos);
    }
  };

  //touch

  const touchStart = (evt) => {
    touchStartX = evt.nativeEvent.touches[0].pageX;
    ref.current.style.background = "green";
  };
  const touchEnd = () => {
    ref.current.style.background = "red";
  };
  const touchMove = (evt) => {
    touchMoveX = evt.nativeEvent.touches[0].pageX;
    ref.current.style.background = "yellow";
  };
  const touchCancel = (evt) => {
    ref.current.style.background = "blue";
  };
  return (
    <>
      <div id="works" className="container">
        <h1 className="title">My works...</h1>
        {!!works ? (
          <div className="slide">
            <SlideController
              slideLength={works.length - 1}
              moveToItem={moveToItem}
              pos={pos}
            />
            <div
              ref={ref}
              onMouseDown={(e) => mouseDown(e)}
              onMouseLeave={mouseLeave}
              onMouseUp={mouseUp}
              onMouseMove={(e) => mouseMove(e)}
              onTouchStart={(e) => mouseDown(e)}
              onTouchEnd={mouseUp}
              onTouchMove={(e) => mouseMove(e)}
              onTouchCancel={mouseLeave}
              
              className="carousel"
            >
              {works.map((work) => (
                <div className="work-item" key={work.id}>
                  <span className="work-item__order">{work.id}</span>
                  <h1 className="work-item__title">{work.name}</h1>
                  <h2 className="work-item__description">{work.description}</h2>
                  <a
                    href={work.link}
                    target="_blank"
                    className="work-item__link"
                  >
                    go to the site
                    <Icon id="hyperlink" className="work-item__link-icon" />
                  </a>
                </div>
              ))}
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

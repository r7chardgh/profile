export function fadeIn(elemId) {
  const elem = document.getElementById(elemId);
  let opacity = 0;
  function increase() {
    if (opacity >= 1) {
      elem.style.opacity = 1;
      elem.style.pointerEvents = "auto";
      return true;
    }
    elem.style.opacity = opacity;
    opacity += 0.03;
    requestAnimationFrame(increase);
  }
  increase();
}
export function fadeInFromRight(elemId) {
  const elem = document.getElementById(elemId);
  let padLeft = -100;
  function increase() {
    if (padLeft >= 0) {
      elem.style.marginLeft = "0%";
      return true;
    }
    elem.style.marginLeft = padLeft + "%";
    padLeft += 3;
    requestAnimationFrame(increase);
  }
  fadeIn(elemId);
  increase();
}
export function scrollIntoElem(elemId) {
  const elem = document.getElementById(elemId);
  elem.scrollIntoView();
}
export function pageLoad(elemId) {
  const elem = document.getElementById(elemId);
  elem.childNodes[0].classList.remove("load");
  elem.childNodes[1].classList.remove("load");
}
export function moveImgPos(event, elemId) {
  const elem = document.getElementById(elemId);
  let x = event.nativeEvent.offsetX;
  let y = event.nativeEvent.offsetY;
  const avatarHeight = elem.offsetHeight;
  const avatarWidth = elem.offsetWidth;
  if (x > avatarWidth / 2) {
    if (y > avatarHeight / 2) {
      elem.classList = "avatar moveBottomRight";
    } else {
      elem.classList = "avatar moveTopRight";
    }
  } else {
    if (y > avatarHeight / 2) {
      elem.classList = "avatar moveBottomLeft";
    } else {
      elem.classList = "avatar moveTopLeft";
    }
  }
}
export function resetImgPos(elemId) {
  const elem = document.getElementById(elemId);
  elem.classList.remove("moveBottomRight");
  elem.classList.remove("moveTopRight");
  elem.classList.remove("moveBottomLeft");
  elem.classList.remove("moveTopLeft");
  
}

export function scrollIn(elemId) {
  const elem = document.getElementById(elemId);
  let target = document.querySelectorAll(".scroll-Target");

  [].forEach.call(target, function (t, i) {
    if (t.classList.contains("scrolled")) {
      return;
    } else {
      t.setAttribute("id", i);
      console.log(elem.scrollTop + elem.offsetHeight + "][" + t.offsetTop);
      if (elem.scrollTop + elem.offsetHeight >= t.offsetTop) {
        t.classList.add("scrolled");
      }
    }
  });
}

export function cursorLightAnimation(event, elemId) {
  const targetE = document.getElementById(elemId + "s");
  let x = event.nativeEvent.offsetX;
  let y = event.nativeEvent.offsetY;
  targetE.style.top = y + "px";
  targetE.style.left = x + "px";
}

export function insertPhoto(elemId) {
  const elem = document.getElementById(elemId);
  let ran = Math.random() + 1;
  elem.style.transform = "scale(" + ran + ")";
}
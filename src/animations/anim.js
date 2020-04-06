export function fadeIn(elemId) {
  const elem = document.getElementById(elemId);
  let opacity = 0;
  function increase() {
    if (opacity >= 1) {
      elem.style.opacity = 1;
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

export function moveImgPos(event, elemId) {
  const elem = document.getElementById(elemId);
  const elemText = document.getElementById("a-t");
  let x = event.nativeEvent.offsetX;
  let y = event.nativeEvent.offsetY;
  elem.style.left = -x * 0.03 + "px";
  elem.style.top = -y * 0.03 + "px";
  elemText.style.left = x * 0.06 + "px";
  elemText.style.top = y * 0.06 + "px";
}
export function resetImgPos(elemId) {
  const elem = document.getElementById(elemId);
  const elemText = document.getElementById("a-t");
  elem.style.left = "0px";
  elem.style.top = "0px";
  elemText.style.left = "0px";
  elemText.style.top = "0px";
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

export function nameAnimation(elemId) {
  const elem = document.getElementById(elemId);
}
function getRandom() {
  return Math.random();
}

export function insertPhoto(elemId) {
  const elem = document.getElementById(elemId);
  let x = -100;
  function increase() {
    if (x >= 0) {
      elem.style.top = "0%";
      return true;
    }
    elem.style.top = x + "%";
    x += 3;
    requestAnimationFrame(increase);
  }
  increase();
}

export function fadeIn(elemId) {
  const elem = document.getElementById(elemId);
  let opacity = 0;
  function increase() {
    opacity += 0.005;
    if (opacity >= 1) {
      elem.style.opacity = 1;
      return true;
    }
    elem.style.opacity = opacity;
    requestAnimationFrame(increase);
  }
  increase();
}
export function fadeInFromRight(elemId) {
  const elem = document.getElementById(elemId);
  let padLeft = 52;
  let width = 0;
  function increase() {
    padLeft -= 0.3;
    width += 0.3;
    if (padLeft <= 0) {
      elem.style.paddingLeft = "0vw";
      elem.style.width = "52vw";
      return true;
    }
    elem.style.paddingLeft = padLeft + "vw";
    elem.style.width = width + "vw";
    requestAnimationFrame(increase);
  }
  increase();
  fadeIn(elemId);
}

export function moveImgPos(event, elemId) {
  const elem = document.getElementById(elemId);
  let x = event.nativeEvent.offsetX;
  let y = event.nativeEvent.offsetY;
  elem.style.left = -x * 0.03 + "px";
  elem.style.top = -y * 0.03 + "px";
}
export function resetImgPos(elemId) {
  const elem = document.getElementById(elemId);
  elem.style.left = "0px";
  elem.style.top = "0px";
}

export function scrollIn(elemId) {
  const elem = document.getElementById(elemId);
  let target = document.querySelectorAll(".scroll-Target");

  [].forEach.call(target, function(t, i) {
    if (t.classList.contains("scrolled")) {
      return;
    } else {
      t.setAttribute("id", i);
      if (elem.scrollTop >= t.offsetTop - 300) {
        t.classList.add("scrolled");
      }
    }
  });
}

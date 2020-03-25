export function fadeIn(elemId) {
  const elem = document.getElementById(elemId);
  let opacity = 0;
  function increase() {
    opacity += 0.03;
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
  let padLeft = 100;
  function increase() {
    padLeft -= 3;
    if (padLeft <= 0) {
      elem.style.marginLeft = "0%";
      return true;
    }
    elem.style.marginLeft = padLeft + "%";
    requestAnimationFrame(increase);
  }
  fadeIn(elemId);
  increase();
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
      console.log(elem.scrollTop + elem.offsetHeight + "][" + t.offsetTop);
      if (elem.scrollTop + elem.offsetHeight >= t.offsetTop) {
        t.classList.add("scrolled");
      }
    }
  });
}

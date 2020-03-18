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
export function moveFromRight(elemId) {
  const elem = document.getElementById(elemId);
  elem.style.position = "relative";
  let pos = 100;
  function increase() {
    pos -= 0.5;
    if (pos <= 0) {
      elem.style.left = "0px";
      return true;
    }
    elem.style.left = pos + "px";
    requestAnimationFrame(increase);
  }
  increase();
  fadeIn(elemId);
}

export function moveImgPos(evnt, elemId) {
  const elem = document.getElementById(elemId);
  let x = evnt.clientX;
  let y = evnt.clientY;
  let w = elem.offsetWidth;
  let h = elem.offsetHeight;
  let imgPos = getPosition(elem);
  console.log(x);
  if (x - imgPos.x >= w / 2) {
    elem.style.left = "-10%";
  } else {
    elem.style.left = "0%";
  }
  if (y - imgPos.y >= h / 2) {
    elem.style.top = "-10%";
  } else {
    elem.style.top = "0%";
  }
}
export function resetImgPos(elemId) {
  const elem = document.getElementById(elemId);
  elem.style.left = "0px";
  elem.style.top = "0px";
}

function getPosition(element) {
  var x = 0;
  var y = 0;
  while (element) {
    x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    y += element.offsetTop - element.scrollLeft + element.clientTop;
    element = element.offsetParent;
  }

  return { x: x, y: y };
}

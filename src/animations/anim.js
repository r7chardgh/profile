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

export function shrinkImg(elemId) {
  const elem = document.getElementById(elemId);
  let size = 110;
  function decrease() {
    size -= 0.03;
    if (size <= 100) {
      elem.style.width = "100%";
      elem.style.height = "100%";
      return true;
    }
    elem.style.width = size + "%";
    elem.style.height = size + "%";
    requestAnimationFrame(decrease);
  }
  decrease();
  fadeIn(elemId);
}
export function moveImgPos(event, elemId) {
  const elem = document.getElementById(elemId);
  let x = event.nativeEvent.offsetX;
  let y = event.nativeEvent.offsetY;
  let w = elem.offsetWidth;
  let h = elem.offsetHeight;
  elem.style.backgroundPositionX = -x * 0.01 + "px";
  elem.style.backgroundPositionY = -y * 0.01 + "px";
}
export function resetImgPos(elemId) {
  const elem = document.getElementById(elemId);
  elem.style.backgroundPosition = "center";
  elem.style.width = "100%";
  elem.style.height = "100%";
}

// function getPosition(element) {
//   var x = 0;
//   var y = 0;
//   while (element) {
//     x += element.offsetLeft - element.scrollLeft + element.clientLeft;
//     y += element.offsetTop - element.scrollLeft + element.clientTop;
//     element = element.offsetParent;
//   }

//   return { x: x, y: y };
// }

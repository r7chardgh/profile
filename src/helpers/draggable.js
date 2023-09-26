const draggable = (() => {
  const init = (targetId) => {
    const target = document.querySelector(targetId);
    let isDown = false;
    let startX;
    let scrollLeft;

    target.addEventListener("mousedown", (e) => {
      isDown = true;
      target.classList.add("active");
      startX = e.pageX - target.offsetLeft;
      scrollLeft = target.scrollLeft;
    });
    target.addEventListener("mouseleave", () => {
      isDown = false;
      target.classList.remove("active");
    });
    target.addEventListener("mouseup", () => {
      isDown = false;
      target.classList.remove("active");
    });
    target.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - target.offsetLeft;
      const walk = (x - startX) ; 
      target.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  };
  return {
    init,
  };
})();
export default draggable;

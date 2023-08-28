const menu = (() => {
  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar");
    if (navbar.classList.contains("reveal")) {
      navbar.classList.remove("reveal");
    } else {
      navbar.classList.add("reveal");
    }
  };

  return { handleOpenMenu };
})();

export default menu;

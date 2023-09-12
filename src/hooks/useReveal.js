import React from "react";
const useReveal = (revealState) => {
  const [isRevealed, setIsRevealed] = React.useState(null);
  const [isBtnShown, setIsBtnShown] = React.useState(false);

  React.useLayoutEffect(() => {
    const target = document.getElementById("skills");
    let isInit = true;
    const hiddenContainer = () => {
      if (window.innerWidth < 992) {
        setIsBtnShown(true);
        if (isInit) {
          setIsRevealed(false);
          isInit = false;
        }
      } else {
        setIsRevealed(true);
        setIsBtnShown(false);
        isInit = true;
      }
    };
    hiddenContainer(target);
    window.addEventListener("resize", () => {
      hiddenContainer(target);
    });

    return () => {
      window.removeEventListener("resize", () => {
        hiddenContainer(target);
      });
    };
  }, []);
  return {
    isRevealed,
    setIsRevealed,
    isBtnShown,
  };
};

export default useReveal;

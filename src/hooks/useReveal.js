import React from "react";
const useReveal = (revealState) => {
  const [isRevealed, setIsRevealed] = React.useState(revealState);
  const [isBtnShown, setIsBtnShown] = React.useState(false);

  React.useLayoutEffect(() => {
    const target = document.getElementById("skills");
    const hiddenContainer = () => {
      if (window.innerWidth < 992) {
        setIsRevealed(false);
        setIsBtnShown(true);
      } else {
        setIsRevealed(true);
        setIsBtnShown(false);
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

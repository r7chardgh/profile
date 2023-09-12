import React from "react";
const useReveal = () => {
  const [isRevealed, setIsRevealed] = React.useState(false);
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

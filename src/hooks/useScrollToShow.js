import React from "react";

const useScrollToShow = ({ targetId }) => {
  const [isRevealed, setIsRevealed] = React.useState(false);
  React.useEffect(() => {
    const reveal = (e) => {
      console.log(e);
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        if (!isRevealed) {
          setIsRevealed(true);
        }
      } else {
        setIsRevealed(false);
      }
    };
    document.addEventListener("scroll", reveal);

    return () => {
      document.removeEventListener("scroll", reveal);
    };
  }, [isRevealed]);
  return {
    isRevealed,
  };
};

export default useScrollToShow;

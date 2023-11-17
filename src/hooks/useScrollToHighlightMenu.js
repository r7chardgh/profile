import React from "react";

export const useScrollToHighlightMenu = () => {
  const [sections, setSections] = React.useState(null);
  const [currentPos, setCurrentPos] = React.useState(null);
  React.useEffect(() => {
    if (!!sections) {
      var secList = [].slice.call(sections);
      const handleScroll = () => {
        secList.map((sec, i, arr) => {
          if (currentPos === i) {
            return;
          }

          if (
            window.scrollY < arr[i + 1]?.offsetTop - 200 &&
            window.scrollY > sec.offsetTop - 200
          ) {
            setCurrentPos(i);
            return;
          }
          if (i + 1 === arr.length && window.scrollY > sec.offsetTop - 200) {
            setCurrentPos(i);
            return;
          }
        });
      };

      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, [sections]);
  return {
    setSections,
    currentPos,
  };
};

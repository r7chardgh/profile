import React from "react";

const useScrollToShow = ({targetId}) => {
    const [isRevealed, setIsRevealed] = React.useState(false);
    let lastScrollTop = 0;
  React.useEffect(() => {
    const handleShowItem = () => {
        const target = document.querySelector(targetId);
        let sp = window.scrollY;
        if(!target){
            return null;
        }else{
        //      if(sp<lastScrollTop){
            
        //     sp=lastScrollTop
        // }
        console.log("ok target is here");
        }
       
        

    };
    window.addEventListener("scroll", () => {
      handleShowItem();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleShowItem();
      });
    };
  }, []);
  return{isRevealed}
};

export default useScrollToShow;

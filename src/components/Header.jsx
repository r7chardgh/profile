import React from "react";
import { NavLink } from "react-router-dom";
import theme from "../helpers/theme";
import btn from "../helpers/btn";
import useScrollToFix from "../hooks/useScrollToFix";
function Header({ currentPos }) {
  const { isShown } = useScrollToFix();
  const navRef = React.useRef(null);
  React.useEffect(() => {
    console.log("current pos: ", currentPos);
     navRef.current.children[currentPos]?.classList.add("highlighted");
     navRef.current.children[currentPos-1]?.classList.remove("highlighted");
     navRef.current.children[currentPos+1]?.classList.remove("highlighted");
  }, [currentPos]);

  return (
    <header
      className={
        "container--flex-header"
        // (isFixed ? " fixed-bar" : "") +
        //+(isShown ? " show" : " no-show")
      }
    >
      <div className="sticky-bar"></div>
      <button className="btn" onClick={() => theme.handleThemeToggle()}>
        toggle
      </button>
      <button
        className="btn menu"
        onClick={() => btn.toggleHiddenContainer(".navbar")}
      >
        <svg
          className="menu-icon"
          width="40"
          height="28"
          viewBox="0 0 40 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9282 2L38.1953 2"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M2 14.0393L38.1954 14.0393"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M20.0586 26L38.1954 26"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <nav className="navbar" ref={navRef}>
        <a href="/" className="navbar__link">
          Home
        </a>
        <a href="/#about" className="navbar__link">
          About
        </a>
        <a href="/#skills" className="navbar__link">
          Skills
        </a>
        <a href="/#works" className="navbar__link">
          Works
        </a>
        <a href="/#contact" className="navbar__link">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;

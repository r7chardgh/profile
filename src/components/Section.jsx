import React from "react";
import Intro from "../pages/Intro";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Works from "../pages/Works";
import Contact from "../pages/Contact";
import getUser from "../hooks/getUser";
function Section({ index, ...props }) {
  const { user } = getUser();
  const renderSwitch = (id) => {
    switch (id) {
      case 1:
        return (
          <Intro
            firstname={user?.firstname}
            lastname={user?.lastname}
            role={user?.role}
          />
        );
        break;
      case 2:
        return <About />;
      case 3:
        return <Skills skills={user?.skills} />;
      case 4:
        return <Works works={user?.works} />;
      case 5:
        return <Contact contact={user?.contact} />;

      default:
        return (
          <div>
            <h1>No sections</h1>
          </div>
        );
    }
  };
  return <section {...props}>{renderSwitch(index)}</section>;
}

export default Section;

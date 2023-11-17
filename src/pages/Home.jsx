import React, { useRef } from "react";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import { user } from "../profile.json";
import Contact from "./Contact";
import { useOutletContext } from "react-router-dom";

function Home() {

  const ref = React.useRef();
  const setSections = useOutletContext();

  React.useEffect(() => {
    setSections(ref.current.children);
  }, []);

  return !!user ? (
    <div className="pages" ref={ref}>
      <Intro
        firstname={user.firstname}
        lastname={user.lastname}
        role={user.role}
      />
      <About />
      <Skills skills={user.skills} />
      <Works works={user.works} />
      <Contact contact={user.contact} />
    </div>
  ) : (
    <h1>loading...</h1>
  );
}

export default Home;

import React from "react";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import { user } from "../profile.json";
function Home() {
  return !!user ? (
    <div className="pages">
      <Intro
        firstname={user.firstname}
        lastname={user.lastname}
        role={user.role}
      />
      <About />
      <Skills skills={user.skills} />
      <Works />
    </div>
  ) : (
    <h1>loading...</h1>
  );
}

export default Home;

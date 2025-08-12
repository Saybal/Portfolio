import React from "react";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Projects from "./Projects/Projects";
import Contact from "./Contact";
import { useTheme } from "../../Hook/useTheme";

const Home = () => {

    const currentTheme = useTheme();
  return (
    <div>
      <Banner />
      <AboutMe />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

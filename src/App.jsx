import React from "react";
import BlurBackground from "./components/BlurBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <BlurBackground />
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;

import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <main>
      <Mouse></Mouse>

      <div className="project">
        <Navigation></Navigation>
        <Logo />
        <Project projectNumber={0} />
        <Button left={"/"} right={"/projet2"} />
      </div>
      <div className="random-circle"></div>
    </main>
  );
};

export default Project1;

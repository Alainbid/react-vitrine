import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Button from "../components/Button";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <div>
      {" "}
      <Mouse></Mouse>
      <Navigation></Navigation>
      <div className="project">
        <Project projectNumber={3} />
        <Button left={"/projet3"} right={"/contact"} />
      </div>
      <div className="randomise-circle"></div>
    </div>
  );
};

export default Project4;

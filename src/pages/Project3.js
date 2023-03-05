import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Button from "../components/Button";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <div>
      {" "}
      <Mouse></Mouse>
      <div className="project">
        <Navigation></Navigation>

        <Project projectNumber={2} />
        <Button left={"/projet2"} right={"/projet4"} />
      </div>
      <div className="random-circle"></div>
    </div>
  );
};

export default Project3;

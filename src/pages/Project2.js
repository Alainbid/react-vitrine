import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Button from "../components/Button";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const Project2 = () => {
  return (
    <div>
      {" "}
      <Mouse></Mouse>
      <div className="project">
        <Navigation></Navigation>

        <Project projectNumber={1} />
        <Button left={"/projet1"} right={"/projet3"} />
      </div>
      <div className="random-circle"></div>
    </div>
  );
};

export default Project2;

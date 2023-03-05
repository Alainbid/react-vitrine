import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Button from "../components/Button";

const Project2 = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Mouse></Mouse>
      <h1>PROJET 2</h1>
      <Button left={"/projet1"} right={"/projet3"} />
    </div>
  );
};

export default Project2;

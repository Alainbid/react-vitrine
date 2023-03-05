import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Button from "../components/Button";

const Project4 = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Mouse></Mouse>
      <h1>PROJECT 4</h1>
      <Button left={"/projet3"} right={"/contact"} />
    </div>
  );
};

export default Project4;

import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Button from "../components/Button";

const Project3 = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Mouse></Mouse>
      <h1>PROJECT 3</h1>
      <Button left={"/projet2"} right={"/projet4"} />
    </div>
  );
};

export default Project3;

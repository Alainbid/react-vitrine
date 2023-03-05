import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Mouse></Mouse>
      <h1>Contact</h1>
      <Button left={"/"} />
    </div>
  );
};

export default Contact;

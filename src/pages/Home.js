import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import TextVolant from "../components/TextVolant.js";
import Button from "../components/Button.js";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div>
      <Logo />
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetwork />

        <div className="home-main">
          <div className="main-content">
            <h1>FS AGENCY</h1>
            <h2>
              <TextVolant />
            </h2>
          </div>
        </div>
        <Button right={"/projet1"} />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Button from "../components/Button";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";

const Contact = () => {
  return (
    <main>
      <Mouse></Mouse>
      <div className="contact">
        <Navigation></Navigation>
        <Logo></Logo>
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue de la poste</p>
              <p>64200 Biarritz</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0627068140" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("téléphone copié");
                  }}
                >
                  06.27.06.81.40
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="michalsarl@aol.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("email copié");
                  }}
                >
                  "michalsarl@aol.com
                </p>
              </CopyToClipboard>
              <div>
                <SocialNetwork />
              </div>
            </div>
          </div>
          <p className="credits">From Scratch</p>
        </div>

        <Button left={"/projet4"} />
      </div>
    </main>
  );
};

export default Contact;

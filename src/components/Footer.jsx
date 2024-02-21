import React from "react";
import "./Footer.css";
import thecock from "../assets/thecock.png";
import audio from "../assets/audio.png";
import thesport from "../assets/thesport.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wrap">
          <div className="block-footer">
            <div className="footer-text">
              <h6>© 2024 TheMealDB Proudly built in the UK </h6>
              <h5>
                Socials:
                <i id="sos" className="bi bi-facebook"></i>
                <i id="sos" className="bi bi-twitter"></i>
                <i id="sos" className="bi bi-whatsapp"></i>
              </h5>
              <div className="footer-link">
                <ul>About</ul>
                <ul>Faq</ul>
                <ul>Contact</ul>
              </div>
            </div>
            <div className="footer-img">
              <img src={thecock} alt="" />
              <img src={audio} alt="" />
              <img src={thesport} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

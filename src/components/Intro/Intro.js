import "./intro.css";
import Me from "../../img/ich22.png";
import Wave from "./Wave";
import React, { useRef } from "react";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaXing, FaEnvelope } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">
            Hey,<br></br>
          </h2>
          <div className="name">
            ich bin
            <span> M</span>ax.
          </div>

          <p className="i-desc">
            {" "}
            Frond End Web Developer aus Düsseldorf. <br />
          </p>

          <Link
            to="contact"
            smooth={true}
            offset={-50}
            duration={1000}
            className="btn"
          >
            Contact me
            <FaEnvelope className="msg-box" />
          </Link>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
        <div className="social-media">
          <a
            className="linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/maximilian-pres-889a1517a/"
          >
            <FaLinkedin className="social linkedin" />
          </a>

          <a
            className="social xing"
            target="_blank"
            href="https://www.xing.com/profile/Max_Pres/cv"
          >
            <FaXing />
          </a>

          <a
            className="social github"
            target="_blank"
            href="https://github.com/maxpres"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <ScrollToTop />
      <Wave />
    </div>
  );
};

export default Intro;

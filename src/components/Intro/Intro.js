import "./intro.css";
import Me from "../../img/ich22.png";
import Wave from "./Wave";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaXing, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  titleAnim,
  titleAnim2,
  Container,
  fade,
  photoAnim,
  socialContainer,
} from "../../animation";

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="intro-left">
        <motion.div
          variants={Container}
          initial="hidden"
          animate="show"
          className="intro-left-wrapper"
        >
          <motion.h2 variants={titleAnim} className="me-intro">
            Hey,<br></br>
          </motion.h2>
          <motion.h2 className="my-name" variants={titleAnim}>
            I'm
            <span> M</span>ax.
          </motion.h2>

          <motion.p className="intro-desc" variants={titleAnim}>
            {" "}
            Front End Developer from Düsseldorf. <br />
          </motion.p>

          <motion.div variants={fade}>
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
          </motion.div>
        </motion.div>
      </div>
      <div className="intro-right">
        <div className="bild">
          <Wave />
          <motion.img
            variants={photoAnim}
            initial="hidden"
            animate="show" //damit wird das staggering deaktiviert und das bild ist sofort da
            src={Me}
            alt=""
            className="intro-img"
          />
        </div>

        <motion.div
          className="social-media"
          variants={socialContainer}
          initial="hidden"
          animate="show"
        >
          <motion.a
            variants={titleAnim2}
            target="_blank"
            href="https://www.linkedin.com/in/maximilian-pres-889a1517a/"
          >
            <FaLinkedin className="social-icon" />
          </motion.a>

          <motion.a
            variants={titleAnim2}
            target="_blank"
            href="https://www.xing.com/profile/Max_Pres/cv"
          >
            <FaXing className="social-icon" />
          </motion.a>

          <motion.a
            variants={titleAnim2}
            target="_blank"
            href="https://github.com/maxpres"
          >
            <FaGithub className="social-icon" />
          </motion.a>
        </motion.div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Intro;

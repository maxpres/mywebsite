import React, { useState } from "react";
import "./Nav.css";
import { motion } from "framer-motion";
import { titleAnimNav, ContainerNav } from "../../animation";

import { Link } from "react-scroll";

const Nav = () => {
  const [Navbar, setNavbar] = useState(false);

  const displayHandler = () => {
    if (window.scrollY >= 650) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", displayHandler);

  return (
    <div>
      <motion.ul
        className={Navbar ? "ul active" : "ul"}
        variants={ContainerNav}
        initial="hidden"
        animate="show"
      >
        <motion.li variants={titleAnimNav}>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            className="navlinks"
          >
            About
          </Link>
        </motion.li>
        <motion.li variants={titleAnimNav}>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-85}
            duration={800}
            className="navlinks"
          >
            Projects
          </Link>
        </motion.li>
        <motion.li variants={titleAnimNav}>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            className="navlinks"
          >
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Nav;

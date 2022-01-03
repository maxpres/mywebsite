import React, { useState } from "react";
import Navigation from "./Nav.css";
import { motion } from "framer-motion";
import styled from "styled-components";

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
      <ul className={Navbar ? "ul active" : "ul"}>
        <motion.li>
          <Link
            activeClass="active"
            to="a-section"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
            className="links"
          >
            About
          </Link>
        </motion.li>
        <li>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            className="links"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className="links"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

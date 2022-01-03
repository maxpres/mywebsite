import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import "./intro.css";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 500) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div
      onClick={scrollToTop}
      className="scroll-to-top cursor-pointer text-center"
    >
      <FaAngleUp className="icon" />
    </div>
  );
};

export default ScrollToTop;

import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { products } from "../../data";
import { motion } from "framer-motion";
import { scrollReveal } from "../../animation";
import { useScroll } from "../../scrollAnimation";

const ProductList = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      className="project-list"
      id="work"
    >
      <div className="project-list-texts">
        <h1 className="project-list-title">
          <span>P</span>rojects
        </h1>
      </div>
      <div className="project-list-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            subject={item.subject}
            description={item.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProductList;

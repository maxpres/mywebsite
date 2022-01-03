import React, { useState } from "react";
import "./Product.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Product = ({ img, link, subject, description }) => {
  const [clicked, setClicked] = useState(false);

  let index;

  const toggle = (index) => {
    if (clicked === index) {
      // if clicked question is already active, then close
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="p">
      <div className="p-browser">
        <h3 className="subject">{subject}</h3>
      </div>

      <img
        src={img}
        target="_blank"
        rel="norefferer"
        alt=""
        className="p-img"
      />

      <div className="p-description">
        <div
          onClick={() => toggle(index)}
          key={index}
          className="description-box"
        >
          <h3 className="headline">Description</h3>
          <span>{clicked === index ? <FaMinus /> : <FaPlus />}</span>
        </div>
        {clicked === index ? (
          <div>
            <p>{description}</p>
            <div className="btnBox">
              <button>GitHub Code</button>

              <button>Live Website</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Product;

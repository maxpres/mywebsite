import React, { useState } from 'react';
import './Product.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { scrollReveal } from '../../animation';
import { useScroll } from '../../scrollAnimation';

const Product = ({ img, linknetlify, linkgithub, subject, description }) => {
  const [clicked, setClicked] = useState(false);

  let index;

  const toggle = (index) => {
    if (clicked === index) {
      // if clicked question is already active, then close
      return setClicked(null);
    }

    setClicked(index);
  };
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
      className='project'
    >
      {/* <div className="project-browser">
        <h3 className="subject">{subject}</h3>
      </div> */}

      <a href={linknetlify} target='_blank'>
        <img src={img} rel='norefferer' alt='' className='project-img' />
      </a>
      <motion.div className='project-description'>
        {/* <div className='project-browser'>
          <h3 className='subject'>{subject}</h3>
        </div> */}
        <div
          onClick={() => toggle(index)}
          key={index}
          className='description-box'
        >
          <h3 className='headline'>{subject}</h3>
          <span>{clicked === index ? <FaMinus /> : <FaPlus />}</span>
        </div>
        {clicked === index ? (
          <div>
            <p className='projectDescription'>{description}</p>
            <div className='btnBox'>
              {' '}
              <a href={linkgithub} target='_blank'>
                <button className='gitnet-btn'>GitHub Code</button>
              </a>
              <a href={linknetlify} target='_blank'>
                <button className='gitnet-btn'>Live Website</button>
              </a>
            </div>
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
};

export default Product;

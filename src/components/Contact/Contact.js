import React from 'react';
import './Contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { motion } from 'framer-motion';
import { scrollReveal } from '../../animation';
import { useScroll } from '../../scrollAnimation';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const [notify, setNotify] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // ohne wird die seite refrehsed
    emailjs
      .sendForm(
        'service_0bm0f4a',
        'template_t94mhyd',
        e.target,
        'user_fKETklXLxA08MpAzM6LjU'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          toast.success('Nachricht gesendet!', {});
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const [element, controls] = useScroll();

  return (
    <motion.div
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
      className='contact-section'
      id='contact'
    >
      <div className='contact-bg'></div>
      <div className='contact-wrapper'>
        <div className='contact-left'>
          <h1 className='contact-title'>
            <span>C</span>ontact
          </h1>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <img src={Phone} alt='' className='contact-icon' />
              +49 163 6706166
            </div>
            <div className='contact-info-item'>
              <img className='contact-icon' src={Email} alt='' />
              maximilian.pres@web.de
            </div>
            <div className='contact-info-item'>
              <img className='contact-icon' src={Address} alt='' />
              Cologne, Germany
            </div>
          </div>
        </div>
        <div className='contact-right'>
          <p className='contact-desc'>
            Bei Interesse an einer Zusammenarbeit, würde ich mich über eine
            Nachricht freuen!
          </p>
          <form autoComplete='off' ref={formRef} onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='user_name' required />
            <input type='text' placeholder='Reference' name='user_subject' />
            <input type='text' placeholder='Email' name='user_email' required />
            <textarea
              type='text'
              rows='5'
              placeholder='Message'
              name='message'
              required
            />
            <button onClick={() => notify()} className='submit'>
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

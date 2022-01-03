import React from "react";
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // ohne wird die seite refrehsed
    emailjs
      .sendForm(
        "service_0bm0f4a",
        "template_t94mhyd",
        formRef.current,
        "user_fKETklXLxA08MpAzM6LjU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => {
    toast.success("Nachricht gesendet!", {});
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Kontakt</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +49 163 6706166
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              maximilian.pres@web.de
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Düsseldorf, Germany
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Bei Interesse an einer Zusammenarbeit, würde ich mich über eine
            Nachricht freuen!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button onClick={notify} className="submit">
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

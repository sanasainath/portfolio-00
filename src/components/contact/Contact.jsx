import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jdv6e8p', 'template_ruaxz5s', form.current, "mnX9o6bmVVlnxZQLK")
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>sanasainath013@gmail.com</h5>
            <a href="mailto:sanasainath013@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option__icon" />
            <h4>Sms</h4>
            <h5>sanasainath</h5>
            <a href="sms://+919390712622?body=Hello" target="_blank" rel="noopener noreferrer">
              Send a SMS
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://wa.me/+917386270521?text=Hello" target="_blank" rel="noopener noreferrer">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

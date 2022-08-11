import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {SiViber} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2q6heid', 'template_sshev4j', form.current, '9uzYtuOnmBbRgn7gI')
        e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sirjc.andal@gmail.com</h5>
            <a href="mailto:johncedrick.magtibay01@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>John Cedrick Magtibay</h5>
            <a href="https://m.me/sirjc001" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <SiViber className='contact__option-icon'/>
            <h4>Viber</h4>
            <h5>+63912-080-0728</h5>
            <a href="https:viber.com" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        
        </form>
      </div>
    </section>
  )
}

export default Contact
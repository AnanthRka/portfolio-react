import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vmlewsb', 'template_pbnrpwc', form.current, 'DOq-jq-fpAnJMhKFu');
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>r.ananth04@gmail.com</h5>
            <a href="mailto:r.ananth04@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>AnanthRka</h5>
            <a href="https://m.me/ananthrka" target= '_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=918668015842" target='_blank'>Whatsapp Me</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'placeholder='Your Full Name' required />
          <input type="email" name= 'email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
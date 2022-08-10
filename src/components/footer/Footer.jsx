import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'

const Footer= () => {
  return (
    <footer>
      <a href="#" class='footer__logo'>JOHN-CEDRICK-MAGTIBAY</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"> <AiOutlineFacebook/> </a>
        <a href="https://twitter.com"> <FiTwitter/> </a>
        <a href="https://instagram.com"> <BsInstagram/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; John Cedrick Magtibay. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
import React from "react";
import './Footer.css';
import Logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/fontawesome-free-brands";
function Footer() {
  return (
    <div className="Footer">
      <div className="footer-ul">
        <ul className="Logo">
          <li className="logo">
            <img src={Logo} alt="" />
            <p>Deliver<span>Ease</span></p>
          </li>

          <li>
           <h5>All Job is to fill your tummy With delicious Food and with fast and
            free food delivery</h5>
          </li>

          <li className="Foot-icon">
            <FontAwesomeIcon icon={faFacebookF} />
            < FontAwesomeIcon icon={faInstagram} />
            < FontAwesomeIcon icon={faTwitter} />
          </li>

        </ul>

        <ul className="About">
           <li className="active">About</li>
           <li>About-Us</li>
           <li>Features</li>
           <li>News</li>
           <li>Menu</li>
        </ul>


        <ul className="About">
           <li className="active">Company</li>
           <li>Why DeliverEase</li>
           <li>Partner With Us</li>
           <li>FAQ</li>
           <li>Blog</li>
        </ul>

        <ul className="About">
           <li className="active">Support</li>
           <li>Account</li>
           <li>Support Carter</li>
           <li>Feed-Back</li>
           <li>Contact Us</li>
           <li>Accesibility</li>
        </ul>

        <ul className="About">
           <li className="active">Get in Touch</li>
           <li>Question or feedback we'd love to hear from you</li>
           <li>
            
           </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__container">
        <div className="footer__section footer__about">
          <h3 className="footer__title">About Us</h3>
          <p className="footer__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ratione repellendus corrupti, ab non eveniet praesentium doloremque sequi porro dolorem nulla, asperiores cumque optio quo.
          </p>
        </div>

        <div className="footer__section footer__links">
          <h3 className="footer__title">Quick links</h3>
          <ul className="footer__list">
            <li><Link to="/" className="footer__link">Home</Link></li>
            <li><Link to="/product" className="footer__link">Products</Link></li>
            <li><Link to="/about" className="footer__link">About Us</Link></li>
            <li><Link to="/contact" className="footer__link">Communication</Link></li>
          </ul>
        </div>

        <div className="footer__section footer__social">
          <h3 className="footer__title">Follow us</h3>
          <div className="footer__icons">
            <div className="footer__icon">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" >
              <FaFacebookSquare style={{ fill: '#B6B7FD', fontSize: '30px' }} />
            </Link>
            </div>
            <div className="footer__icon">
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" >
              <FaInstagramSquare style={{ fill: '#B6B7FD', fontSize: '30px' }} />
            </Link>
            </div>
            <div className="footer__icon">
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter style={{ fill: '#B6B7FD', fontSize: '30px' }} />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

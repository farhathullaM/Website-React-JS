import React from 'react';
import logo from '../Assets/logo_big.png';
import insta from '../Assets/instagram_icon.png';
import whatsap from '../Assets/whatsapp_icon.png';
import pin from '../Assets/pintester_icon.png';
import './Footer.css';

const Footer = () => {
return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
    <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container"><img src={insta} alt="" /></div>
            <div className="footer-icons-container"><img src={whatsap} alt="" /></div>
            <div className="footer-icons-container"><img src={pin} alt="" /></div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024-All rights reserved</p>
        </div>
    </div>
)
}

export default Footer;

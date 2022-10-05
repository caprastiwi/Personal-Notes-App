import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
function Footer() {
    return (
        <footer>
            <div className='footer-left'>
                <h1>Azhari</h1>
                <p>All I wanna do is, <span>fly high!</span></p>
            </div>
            <div className='footer-right'>
                <a
                className='footer-icon'
                href='https://twitter.com/Azhprstw'>
                    <FaTwitter className='social-icon' />
                </a>
                <a
                className='footer-icon'
                href='https://instagram.com/Azhprstw'>
                    <FaInstagram className='social-icon' />
                </a>
                <a
                className='footer-icon'
                href='https://linkedin.com/in/caprastiwi'>
                    <FaLinkedinIn className='social-icon' />
                </a>
                <a
                className='footer-icon'
                href='https://github.com/caprastiwi'>
                    <FaGithub className='social-icon' />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
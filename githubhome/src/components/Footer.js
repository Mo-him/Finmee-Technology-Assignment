import React from 'react';

const Footer = () => {
  return (
    <footer className='footer1'>
      <p>&copy; 2023 GitHub, Inc.</p>
      <div>
      <ul className='footer-links'>
        <li>About</li>
        <li>Security</li>
        <li>Privacy</li>
      </ul>

      <ul className='footer-links'>
        <li>Shop</li>
        <li>Status</li>
        <li>Terms</li>
      </ul>

      <ul className='footer-links'>
        <li>Api</li>
        <li>Blog</li>
        <li>Pricing</li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
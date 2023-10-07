import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png" alt="Icon" />
        

      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/industries">Industries</a>
          </li>
          <li>
            <a href="/ai-software">AI Software</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
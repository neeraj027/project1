import React, { useState } from "react";

const Header = () => {
  const [nav,setNav]=useState(false);
  const toggleNav = () => {
    setNav(!nav);
    if (nav) {
      document.querySelector(".hidden-nav").hidden = true;
    } else {
      document.querySelector(".hidden-nav").hidden = false;
    }
  };
  
  const [scroll,setScroll] = useState(false);
  
    
  return (
    <nav>
      <div className="hidden-nav" hidden>
      <button style={{"position":"absolute","top":"20px","right":"60px","padding":"10px","backgroundColor":"#222831","border":"none"}} onClick={toggleNav}>
        <img src="./x-mark.png" alt="" />
        </button>
        <ul>
          <li><a href="#" className="hidden-nav-content">Home</a></li>
          <li><a href="#" className="hidden-nav-content">About</a></li>
          <li><a href="#" className="hidden-nav-content">Tools</a></li>
          <li><a href="#" className="hidden-nav-content">Login</a></li>
          <li><a href="#" className="hidden-nav-content">Sign In</a></li>
          
        </ul>
      </div>
      <div className="header">
        <div className="header-logo">
          <img src="./pyLogo.png" alt="" />
          <a href="#">PySpace</a>
        </div>
        <div>
          <div href="" onClick={toggleNav} className="nav-show">
            <img src="./menu.png" alt="" />
          </div>
        </div>
        <div className="header-content">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Tools</a></li>
          </ul>
        </div>
        <div className="header-btn">
          <button className="btn header-btn-login">Login</button>
          <button className="btn header-btn-signin">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;

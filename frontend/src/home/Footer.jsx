import React from "react";
import { useNavigate } from "react-router-dom";

function Footer(){
  return(
    <footer className="footer">
      <p>Pet Haven - Crafted for people who love rescue stories.</p>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Volunteer</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  )
}

export default Footer
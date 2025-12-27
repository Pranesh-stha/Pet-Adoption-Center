import React from "react";
import { useNavigate } from "react-router-dom";

function Header(){
  const navigate = useNavigate()
  return(
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">PH</div>
        <div className="brand-copy">
          <span className="brand-name">Pet Haven</span>
          <span className="brand-tagline">Adopt happiness</span>
        </div>
      </div>
      <nav className="nav" style={{cursor:"pointer"}}>
        <span className="nav-link active" onClick={() => navigate("/")}>Home</span>
        <span className="nav-link" onClick={() => navigate("/pets")}>Pets</span>
        <span className="nav-link">Process</span>
        <span className="nav-link">Visit us</span>
      </nav>
      <div className="cta-group">
        <button className="ghost-btn">Donate</button>
        <button className="primary-btn" data-open-login>Login</button>
      </div>
    </header>
  )
}

export default Header
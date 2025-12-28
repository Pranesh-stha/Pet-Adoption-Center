import React from "react";
import { useNavigate } from "react-router-dom";

function Header({setLoginTrue, petData}){
  const navigate = useNavigate()
  const [homeActive, setHomeActive] = React.useState(true);
  const [petActive, setpetActive] = React.useState(false);

  function toggleHome() {
    setHomeActive(!homeActive);
    setpetActive(!petActive);
    navigate("/")
  }

  function togglePet(){
    setpetActive(!petActive);
    setHomeActive(!homeActive);
    navigate("/pets")
    petData();
  }

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
        <span className={`nav-link ${homeActive?"active":""}`} onClick={toggleHome}>Home</span>
        <span className={`nav-link ${petActive?"active":""}`} onClick={togglePet}>Pets</span>
        <span className="nav-link">Process</span>
        <span className="nav-link">Visit us</span>
      </nav>
      <div className="cta-group">
        <button className="ghost-btn">Donate</button>
        <button className="primary-btn" data-open-login onClick={setLoginTrue}>Login</button>
      </div>
    </header>
  )
}

export default Header
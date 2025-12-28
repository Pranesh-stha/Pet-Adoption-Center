import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ setLoginTrue, petData, loginState, setLoginState, credential }) {
  const navigate = useNavigate();
  const [homeActive, setHomeActive] = React.useState(true);
  const [petActive, setpetActive] = React.useState(false);
  const [Process, setProcess] = React.useState(false);
  const [adoption, setAdoption] = React.useState(false);

  function toggleHome() {
    setHomeActive(true);
    setpetActive(false);
    setProcess(false);
    setAdoption(false);
    navigate("/");
  }

  function togglePet() {
    setpetActive(true);
    setHomeActive(false);
    setProcess(false);
    setAdoption(false);
    navigate("/pets");
    petData();
  }

  function toggleProcess() {
    setpetActive(false);
    setHomeActive(false);
    setProcess(true);
    setAdoption(false);
    navigate("/process");
  }

  function toggleAdoption() {
    setpetActive(false);
    setHomeActive(false);
    setProcess(false);
    setAdoption(true);
    navigate("/adoption");
  }

  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">PH</div>
        <div className="brand-copy">
          <span className="brand-name">{loginState ?  "loggedIn" : "Pet Haven" }</span>
          <span className="brand-tagline">Adopt happiness</span>
        </div>
      </div>
      <nav className="nav" style={{ cursor: "pointer" }}>
        <span
          className={`nav-link ${homeActive ? "active" : ""}`}
          onClick={toggleHome}
        >
          Home
        </span>
        <span
          className={`nav-link ${petActive ? "active" : ""}`}
          onClick={togglePet}
        >
          Pets
        </span>
        <span className={`nav-link ${Process ? "active" : ""}`} onClick={toggleProcess}>Process</span>
        <span className={`nav-link ${adoption ? "active" : ""}`} onClick={toggleAdoption}>My Adoptions</span>
      </nav>
      <div className="cta-group">
        <button className="ghost-btn">Donate</button>
        {loginState?<button className="primary-btn" data-open-login onClick={()=>{setLoginState(false)}}>
          Logout
        </button>:<button className="primary-btn" data-open-login onClick={setLoginTrue}>
          Login
        </button>}
        
      </div>
    </header>
  );
}

export default Header;

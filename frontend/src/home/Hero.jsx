import React from "react";
import { useNavigate } from "react-router-dom";

function Hero(){
  return(
    <section className="hero">
        <div className="hero-visual">
        <div className="pet-card large">
          <div className="pet-image"></div>
          <div className="pet-meta">
            <div>
              <p className="pet-name">Luna</p>
              <p className="pet-detail">2 yrs - Calico</p>
            </div>
            <span className="badge badge-soft">Vaccinated</span>
          </div>
          <button className="primary-btn adopt-btn">Adopt Luna</button>
        </div>
        <div className="pet-card small float-one">
          <div className="pet-info">
            <p className="pet-name">Cooper</p>
            <p className="pet-detail">1 yr - Golden mix</p>
          </div>
          <span className="badge badge-solid">Ready to meet</span>
          <button className="ghost-btn adopt-btn">Adopt Cooper</button>
        </div>
        <div className="pet-card small float-two">
          <div className="pet-info">
            <p className="pet-name">Miso</p>
            <p className="pet-detail">4 mo - Tabby</p>
          </div>
          <span className="badge badge-soft">Foster to adopt</span>
          <button className="ghost-btn adopt-btn">Adopt Miso</button>
        </div>
        </div>

        <div className="hero-copy">
          <div className="pill">Every visit helps a rescue</div>
          <h1>Find a pet that fits your life, not just your feed.</h1>
          <p className="lede">
            Meet pets matched to your home, energy, and schedule. Our team coaches you from the first hello to the ride home.
          </p>
          <div className="actions">
            <button className="primary-btn">Browse adoptables</button>
            <button className="ghost-btn">How adoption works</button>
          </div>
          <div className="stats">
            <div className="stat">
              <span className="stat-value">3,240</span>
              <span className="stat-label">pets placed</span>
            </div>
            <div className="stat">
              <span className="stat-value">92%</span>
              <span className="stat-label">perfect matches</span>
            </div>
            <div className="stat">
              <span className="stat-value">48 hrs</span>
              <span className="stat-label">avg. to meet</span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero;
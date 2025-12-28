import React from "react";
import { useNavigate } from "react-router-dom";
import Logincard from "./Logincard";

function Adoption({ showLogin, setLoginFalse, pets }){
  return(
    <main className="adoption-layout">
      <section className="adoption-hero">
        <div className="pill">Your adoption</div>
        <h1>Your adopted buddy, all in one card.</h1>
        <p className="lede">Save this card for pickup and homecoming details. Reach out anytime if you need tweaks.</p>
      </section>

      <article className="adoption-card">
        <div className="adoption-photo" style={{backgroundImage: "url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80)"}}>
          <span className="status-chip">Adopted</span>
          <span className="photo-tag">Pick-up ready</span>
        </div>
        <div className="adoption-body">
          <div className="adoption-head">
            <div>
              <p className="pet-name">Luna</p>
              <p className="pet-detail">Calico cat · 2 yrs · Loves window naps</p>
            </div>
            <div className="adoption-tags">
              <span className="badge badge-soft">Indoor pro</span>
              <span className="badge badge-solid">Microchipped</span>
            </div>
          </div>
          <p className="adoption-note">
            Soft blanket included, favorite feather wand packed, and calming spray on hand. Luna prefers calm greetings and cozy corners.
          </p>
          <div className="adoption-meta">
            <div className="meta-tile">
              <span className="meta-label">Adoption #</span>
              <strong>PH-2412</strong>
            </div>
            <div className="meta-tile">
              <span className="meta-label">Adoption date</span>
              <strong>Fri · Jan 12</strong>
            </div>
            <div className="meta-tile">
              <span className="meta-label">Pick-up time</span>
              <strong>4:30 PM</strong>
            </div>
            <div className="meta-tile">
              <span className="meta-label">Coordinator</span>
              <strong>Amelia · text ready</strong>
            </div>
          </div>
          <div className="adoption-actions">
            <a href="process.html" className="primary-btn">See process</a>
            <a href="pets.html" className="ghost-btn">Browse more pets</a>
          </div>
        </div>
      </article>
      {showLogin ? <Logincard setLoginFalse={setLoginFalse} /> : null}
    </main>
  )
}

export default Adoption
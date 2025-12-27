import React from "react";
import { useNavigate } from "react-router-dom";

function Homecard(){
  return(
    <section className="featured">
        <div className="section-head">
          <div>
            <p className="eyebrow">Featured this week</p>
            <h2>Pets ready for a forever home.</h2>
          </div>
          <a href="#" className="text-link">View full gallery</a>
        </div>
        <div className="grid">
          <article className="card">
            <div className="card-image one"></div>
            <div className="card-body">
              <div>
                <p className="pet-name">Maple</p>
                <p className="pet-detail">3 yrs - Shepherd mix</p>
              </div>
              <span className="badge badge-soft">Calm & gentle</span>
              <button className="primary-btn adopt-btn">Adopt Maple</button>
            </div>
          </article>
          <article className="card">
            <div className="card-image two"></div>
            <div className="card-body">
              <div>
                <p className="pet-name">Nori</p>
                <p className="pet-detail">10 mo - Black cat</p>
              </div>
              <span className="badge badge-soft">Indoor pro</span>
              <button className="primary-btn adopt-btn">Adopt Nori</button>
            </div>
          </article>
          <article className="card">
            <div className="card-image three"></div>
            <div className="card-body">
              <div>
                <p className="pet-name">Piper</p>
                <p className="pet-detail">8 mo - Cattle dog</p>
              </div>
              <span className="badge badge-solid">Active homes</span>
              <button className="primary-btn adopt-btn">Adopt Piper</button>
            </div>
          </article>
        </div>
      </section>
  )
}

export default Homecard;
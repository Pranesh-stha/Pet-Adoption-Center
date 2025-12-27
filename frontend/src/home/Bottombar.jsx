import React from "react";
import { useNavigate } from "react-router-dom";


function Bottombar(){
  return(
    <section className="cta">
        <div className="cta-inner">
          <div>
            <p className="eyebrow">Visit the shelter</p>
            <h2>Meet a pet this weekend.</h2>
            <p className="lede">Tours daily from 10-6. Bring questions, leave with a friend.</p>
          </div>
          <div className="cta-actions">
            <button className="primary-btn">Book a visit</button>
            <button className="ghost-btn">Call the team</button>
          </div>
        </div>
      </section>
  )
}

export default Bottombar
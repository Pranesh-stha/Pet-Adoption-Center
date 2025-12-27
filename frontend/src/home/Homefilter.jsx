import React from "react";
import { useNavigate } from "react-router-dom";

function Homefilter(){
  return(
    <section className="quick-filters">
        <div className="section-head">
          <div>
            <p className="eyebrow">Start here</p>
            <h2>Choose a vibe, we'll show the pets.</h2>
          </div>
          <button className="ghost-btn">See all filters</button>
        </div>
        <div className="chip-row">
          <button className="chip active">Family friendly</button>
          <button className="chip">Low shedding</button>
          <button className="chip">Apartment sized</button>
          <button className="chip">Adventure buddy</button>
          <button className="chip">Senior pets</button>
          <button className="chip">Special needs</button>
        </div>
      </section>
  )
}

export default Homefilter
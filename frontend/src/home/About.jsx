import React from "react";
import { useNavigate } from "react-router-dom";

function About(){
  return(
    
      <section className="why">
        <div className="feature">
          <div className="icon-ring">1</div>
          <div>
            <h3>Guided matchmaking</h3>
            <p>We learn your routine, space, and energy to recommend pets who thrive with you.</p>
          </div>
        </div>
        <div className="feature">
          <div className="icon-ring">2</div>
          <div>
            <h3>Transparent health</h3>
            <p>Every pet arrives vaccinated, vet-checked, and with upfront care notes.</p>
          </div>
        </div>
        <div className="feature">
          <div className="icon-ring">3</div>
          <div>
            <h3>Community care</h3>
            <p>Workshops, training partners, and a helpline for your first 30 days home.</p>
          </div>
        </div>
      </section>

      
    
  )
}

export default About
import React from "react";
import { useNavigate } from "react-router-dom";

function Pets(){
  return(
    <div className="page-wide">

    <main className="pets-layout">
      <aside className="filter-panel">
        <h3>Filter pets</h3>

        <div className="filter-section">
          <p className="eyebrow">Type</p>
          <div className="filter-list">
            <label><input type="checkbox" className="filter-check" data-filter="type" value="dog"/> Dog</label>
            <label><input type="checkbox" className="filter-check" data-filter="type" value="cat"/> Cat</label>
            <label><input type="checkbox" className="filter-check" data-filter="type" value="rabbit"/> Rabbit</label>
          </div>
        </div>

        <div className="filter-section">
          <p className="eyebrow">Age</p>
          <div className="filter-list">
            <label><input type="checkbox" className="filter-check" data-filter="age" value="baby"/> Baby</label>
            <label><input type="checkbox" className="filter-check" data-filter="age" value="young"/> Young</label>
            <label><input type="checkbox" className="filter-check" data-filter="age" value="adult"/> Adult</label>
            <label><input type="checkbox" className="filter-check" data-filter="age" value="senior"/> Senior</label>
          </div>
        </div>

        <div className="filter-section">
          <p className="eyebrow">Size</p>
          <div className="filter-list">
            <label><input type="checkbox" className="filter-check" data-filter="size" value="small"/> Small</label>
            <label><input type="checkbox" className="filter-check" data-filter="size" value="medium"/> Medium</label>
            <label><input type="checkbox" className="filter-check" data-filter="size" value="large"/> Large</label>
          </div>
        </div>

        <div className="filter-section">
          <p className="eyebrow">Energy</p>
          <div className="filter-list">
            <label><input type="checkbox" className="filter-check" data-filter="energy" value="low"/> Low</label>
            <label><input type="checkbox" className="filter-check" data-filter="energy" value="medium"/> Medium</label>
            <label><input type="checkbox" className="filter-check" data-filter="energy" value="high"/> High</label>
          </div>
        </div>

        <button className="ghost-btn clear-filters" id="clearFilters">Clear filters</button>
      </aside>

      <section className="pets-content">
        <div className="pets-header">
          <div>
            <p className="eyebrow">Adoptables</p>
            <h2>Meet the pets waiting for you.</h2>
          </div>
          <div className="pets-actions">
            <p id="resultsCount" className="muted">Showing all pets</p>
            <button className="primary-btn add-pet-btn" id="addPetBtn" data-admin-only style={{display:"none"}}>+ Add pet</button>
          </div>
        </div>

        <div className="pets-grid" id="petsGrid">
          <article className="pet-card-block">
          <div className="thumb" style={{backgroundImage:"url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80)"}}></div>
          <div className="meta">
            <h4>Luna</h4>
            <small>Cat - Calico</small>
            <small>Age: 2 yrs - Size: small</small>
            <div className="tags">
              <span className="tag">Adult</span>
              <span className="tag">Energy: medium</span>
              <span className="tag">Calm & cuddly</span>
            </div>
            <button className="primary-btn adopt-btn">Adopt Calico</button>
          </div>
        </article>
        </div>
      </section>
    </main>
  </div>
  )
}

export default Pets
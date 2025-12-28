import React from "react";
import { useNavigate } from "react-router-dom";
import Logincard from "./Logincard";

function Pets({ showLogin, setLoginFalse, pets }) {
  return (
    <div className="page-wide">
      <main className="pets-layout">
        <aside className="filter-panel">
          <h3>Filter pets</h3>

          <div className="filter-section">
            <p className="eyebrow">Age</p>
            <div className="filter-list">
              <label>
                <input
                  type="checkbox"
                  className="filter-check"
                  data-filter="age"
                  value="baby"
                />{" "}
                Baby
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-check"
                  data-filter="age"
                  value="young"
                />{" "}
                Young
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-check"
                  data-filter="age"
                  value="adult"
                />{" "}
                Adult
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-check"
                  data-filter="age"
                  value="senior"
                />{" "}
                Senior
              </label>
            </div>
          </div>

          <div className="filter-section">
            <p className="eyebrow">Size</p>
            <div className="filter-list">
              <label>
                <input
                  type="checkbox"
                  className="filter-check"
                  data-filter="size"
                  value="small"
                />{" "}
                Small
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-check"
                  data-filter="size"
                  value="medium"
                />{" "}
                Medium
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-check"
                  data-filter="size"
                  value="large"
                />{" "}
                Large
              </label>
            </div>
          </div>

          <div className="filter-section">
            <p className="eyebrow">Energy</p>
            <div className="filter-list">
              <label>
                <input
                  type="checkbox"
                  className="filter-check"
                  data-filter="energy"
                  value="low"
                />{" "}
                Low
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-check"
                  data-filter="energy"
                  value="medium"
                />{" "}
                Medium
              </label>
              <label>
                <input
                  type="checkbox"
                  className="filter-check"
                  data-filter="energy"
                  value="high"
                />{" "}
                High
              </label>
            </div>
          </div>

          <button className="ghost-btn clear-filters" id="clearFilters">
            Clear filters
          </button>
        </aside>

        <section className="pets-content">
          <div className="pets-header">
            <div>
              <p className="eyebrow">Adoptables</p>
              <h2>Meet the pets waiting for you.</h2>
            </div>
            <div className="pets-actions">
              <p id="resultsCount" className="muted">
                Showing all {pets.length} pets 
              </p>
              <button
                className="primary-btn add-pet-btn"
                id="addPetBtn"
                data-admin-only
                style={{ display: "none" }}
              >
                + Add pet
              </button>
            </div>
          </div>

          <div className="pets-grid" id="petsGrid">
            {pets.map((pet) => (
              <article key={pet.id} className="pet-card-block">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: `url(${pet.img})`,
                  }}
                ></div>

                <div className="meta">
                  <h4>{pet.name}</h4>

                  <small>
                    {pet.type} - {pet.breed}
                  </small>

                  <small>
                    Age: {pet.age} yrs - Size: {pet.size}
                  </small>

                  <div className="tags">
                    <span className="tag">{pet.agegroup ?? pet.ageGroup}</span>
                    <span className="tag">Energy: {pet.energy}</span>
                    <span className="tag">{pet.badge}</span>
                  </div>

                  <button className="primary-btn adopt-btn">
                    Adopt {pet.name}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {showLogin ? <Logincard setLoginFalse={setLoginFalse} /> : null}
    </div>
  );
}

export default Pets;

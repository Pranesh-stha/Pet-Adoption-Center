import React from "react";

function Addpet({ setShowAdBit }) {
  return (
    <div className="modal-overlay" id="addPetModal">
      <div className="modal-card small-card">
        <button
          className="modal-close"
          id="closeAddPet"
          aria-label="Close add pet form"
          onClick={() => setShowAdBit(false)}
        >
          &times;
        </button>
        <div className="modal-pane">
          <p className="eyebrow">Admin</p>
          <h3>Add a new pet</h3>
          <form className="modal-form addpet-grid">
            {/* LEFT (5 inputs) */}
            <div className="addpet-col">
              <label className="form-field">
                <span>Name</span>
                <input type="text" placeholder="Buddy" />
              </label>

              <label className="form-field">
                <span>Type</span>
                <input type="text" placeholder="Dog / Cat" />
              </label>

              <label className="form-field">
                <span>Breed</span>
                <input type="text" placeholder="Labrador" />
              </label>

              <label className="form-field">
                <span>Age (years)</span>
                <input type="number" step="0.1" placeholder="2" />
              </label>

              <label className="form-field">
                <span>Age Group</span>
                <input
                  type="text"
                  placeholder="Baby / Young / Adult / Senior"
                />
              </label>
            </div>

            {/* RIGHT (4 inputs + save) */}
            <div className="addpet-col">
              <label className="form-field">
                <span>Size</span>
                <input type="text" placeholder="Small / Medium / Large" />
              </label>

              <label className="form-field">
                <span>Energy</span>
                <input type="text" placeholder="Low / Medium / High" />
              </label>

              <label className="form-field">
                <span>Badge</span>
                <input type="text" placeholder="Vaccinated / Friendly" />
              </label>

              <label className="form-field">
                <span>Image URL</span>
                <input type="url" placeholder="https://..." />
              </label>

              <button type="button" className="primary-btn form-btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addpet;

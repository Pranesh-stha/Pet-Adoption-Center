import React from "react";

function Addpet({
  setShowAdBit,
  newPet,
  handleNewPetChange,
  handleSavePet,
  saveMsg,
  setSaveMsg,
}) {
  return (
    <div className="modal-overlay" id="addPetModal">
      <div className="modal-card small-card">
        <button
          className="modal-close"
          onClick={() => {
            setSaveMsg("");
            setShowAdBit(false);
          }}
        >
          &times;
        </button>

        <div className="modal-pane">
          <p className="eyebrow">Admin</p>
          <h3>Add a new pet</h3>
          <form className="modal-form addpet-grid">
            <div className="addpet-col">
              <label className="form-field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={newPet.name}
                  onChange={handleNewPetChange}
                  placeholder="Buddy"
                />
              </label>

              <label className="form-field">
                <span>Type</span>
                <input
                  type="text"
                  name="type"
                  value={newPet.type}
                  onChange={handleNewPetChange}
                  placeholder="Dog / Cat"
                />
              </label>

              <label className="form-field">
                <span>Breed</span>
                <input
                  type="text"
                  name="breed"
                  value={newPet.breed}
                  onChange={handleNewPetChange}
                  placeholder="Labrador"
                />
              </label>

              <label className="form-field">
                <span>Age (years)</span>
                <input
                  type="number"
                  step="0.1"
                  name="age"
                  value={newPet.age}
                  onChange={handleNewPetChange}
                  placeholder="2"
                />
              </label>

              <label className="form-field">
                <span>Age Group</span>
                <input
                  type="text"
                  name="agegroup"
                  value={newPet.agegroup}
                  onChange={handleNewPetChange}
                  placeholder="Baby / Young / Adult / Senior"
                />
              </label>
            </div>

            <div className="addpet-col">
              <label className="form-field">
                <span>Size</span>
                <input
                  type="text"
                  name="size"
                  value={newPet.size}
                  onChange={handleNewPetChange}
                  placeholder="Small / Medium / Large"
                />
              </label>

              <label className="form-field">
                <span>Energy</span>
                <input
                  type="text"
                  name="energy"
                  value={newPet.energy}
                  onChange={handleNewPetChange}
                  placeholder="Low / Medium / High"
                />
              </label>

              <label className="form-field">
                <span>Badge</span>
                <input
                  type="text"
                  name="badge"
                  value={newPet.badge}
                  onChange={handleNewPetChange}
                  placeholder="Vaccinated / Friendly"
                />
              </label>

              <label className="form-field">
                <span>Image URL</span>
                <input
                  type="url"
                  name="img"
                  value={newPet.img}
                  onChange={handleNewPetChange}
                  placeholder="https://..."
                />
              </label>
              <p style={{color:"green"}}>{saveMsg}</p>
              <button
                type="button"
                className="primary-btn form-btn"
                onClick={handleSavePet}
              >
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

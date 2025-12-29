import React from "react";
import axios from "axios";

function Adoption({ loginState, openLogin, currentUser }) {
  const [myPets, setMyPets] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function load() {
      if (!loginState || !currentUser) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/myAdoptions/${currentUser.user_id}`
        );
        setMyPets(res.data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [loginState, currentUser]);

  if (!loginState || !currentUser) {
    return (
      <div className="page-wide">
        <h2>My Adoptions</h2>
        <p>Please login to see your adopted pets.</p>
        <button className="primary-btn" onClick={openLogin}>Login</button>
      </div>
    );
  }

  return (
    <div className="page-wide">
      <h2>My Adoptions</h2>
      {loading ? <p>Loading...</p> : null}

      {myPets.length === 0 ? (
        <p>You haven't adopted any pets yet.</p>
      ) : (
        <div className="pets-grid">
          {myPets.map((pet) => (
            <article key={pet.id} className="pet-card-block">
              <div className="thumb" style={{ backgroundImage: `url(${pet.img})` }} />
              <div className="meta">
                <h4>{pet.name}</h4>
                <small>{pet.type} - {pet.breed}</small>
                <small>Age: {pet.age} yrs - Size: {pet.size}</small>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Adoption

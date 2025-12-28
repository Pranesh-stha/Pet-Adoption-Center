import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./home/Home";
import Pets from "./Pets";
import axios from "axios";
import Process from "./process";
import Adoption from "./Adoption";

function App() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [pets, setPets] = React.useState([]);

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  async function petData() {
    try {
      const response = await axios.get("http://localhost:5000/pets");
      const shuffledPets = shuffleArray(response.data);
      setPets(shuffledPets);
    } catch (error) {
      console.error("Failed to fetch pets:", error);
    }
  }

  React.useEffect(() => {
    petData();
  }, []);

  return (
    <div className="page">
      <Header setLoginTrue={() => setShowLogin(true)} petData={petData} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setLoginFalse={() => setShowLogin(false)}
              showLogin={showLogin}
            />
          }
        />
        <Route
          path="/pets"
          element={
            <Pets
              showLogin={showLogin}
              setLoginFalse={() => setShowLogin(false)}
              pets={pets}
            />
          }
        />

        <Route
          path="/process"
          element={
            <Process
              showLogin={showLogin}
              setLoginFalse={() => setShowLogin(false)}
            />
          }
        />

        <Route
          path="/adoption"
          element={
            <Adoption
              showLogin={showLogin}
              setLoginFalse={() => setShowLogin(false)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

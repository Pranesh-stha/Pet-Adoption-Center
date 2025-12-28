import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./home/Home";
import Pets from "./Pets";
import axios from "axios";
import Process from "./process";
import Adoption from "./Adoption";
import Logincard from "./Logincard";

function App() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [pets, setPets] = React.useState([]);
  const [loginState, setLoginState] = React.useState(false);
  const [wrongMsg, setWrongMsg] = React.useState("");

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

  const [credential, setCredential] = React.useState({
    email: "",
    password: "",
  });

  async function logginIn() {
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        credential
      );
      console.log(response.data);
      if (response.data.state === false) {
        console.log("fail");
        setShowLogin(true);
        setLoginState(false);
        setWrongMsg(response.data.msg);
      } else {
        console.log("pass");
        setShowLogin(false);
        setLoginState(true);
        setWrongMsg("");
        setCredential({
          email: "",
          password: "",
        });
      }
    } catch (err) {
      console.log("error checking", err);
    }
  }

  return (
    <div className="page">
      <Header
        setLoginTrue={() => setShowLogin(true)}
        petData={petData}
        loginState={loginState}
        setLoginState={setLoginState}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              setLoginFalse={() => setShowLogin(false)}
              showLogin={showLogin}
              setLoginState={setLoginState}
            />
          }
        />
        <Route
          path="/pets"
          element={<Pets showLogin={showLogin} pets={pets} />}
        />

        <Route path="/process" element={<Process />} />

        <Route
          path="/adoption"
          element={
            <Adoption
              showLogin={showLogin}
              setLoginFalse={() => setShowLogin(false)}
              setLoginState={setLoginState}
            />
          }
        />
      </Routes>
      {showLogin ? (
        <Logincard
          credential={credential}
          setCredential={setCredential}
          logginIn={logginIn}
          setShowLogin={setShowLogin}
          wrongMsg={wrongMsg}
        />
      ) : null}
    </div>
  );
}

export default App;

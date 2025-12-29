import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./home/Home";
import Pets from "./Pets";
import axios from "axios";
import Process from "./process";
import Adoption from "./Adoption";
import Logincard from "./Logincard";
import Addpet from "./Addpet";

function App() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [pets, setPets] = React.useState([]);
  const [loginState, setLoginState] = React.useState(false);
  const [wrongMsg, setWrongMsg] = React.useState("");
  const [adminLogin, setAdminLogin] = React.useState(false);
  const [showAdBit, setShowAdBit] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);

  function adminLoginHandler() {
    if (credential.email === "admin" && credential.password === "admin") {
      setAdminLogin(true);
      setShowLogin(false);
      setLoginState(true);
      setWrongMsg("");
      setRegMsg("");
      setCredential({
        email: "",
        password: "",
      });
    }
  }

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
        setRegMsg("");
      } else {
        console.log("pass");
        setShowLogin(false);
        setLoginState(true);
        setWrongMsg("");
        setCurrentUser(response.data.user);
        setCredential({ email: "", password: "" });
        setRegMsg("");
      }
    } catch (err) {
      console.log("error checking", err);
    }
  }

  const [registry, setRegistry] = React.useState({
    fName: "",
    email: "",
    password: "",
  });

  const [regMsg, setRegMsg] = React.useState("");

  async function newUser() {
    const response = await axios.post(
      "http://localhost:5000/register",
      registry
    );
    setRegMsg(response.data.message);
  }

  const [newPet, setNewPet] = React.useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    agegroup: "",
    size: "",
    energy: "",
    badge: "",
    img: "",
  });

  function handleNewPetChange(e) {
    const { name, value } = e.target;
    setNewPet((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSavePet() {
    console.log(newPet);
  }

  const [saveMsg, setSaveMsg] = React.useState("");

  async function saveNewPet() {
    try {
      const response = await axios.post(
        "http://localhost:5000/newAnimal",
        newPet
      );
      setSaveMsg(response.data.message);

      setNewPet({
        name: "",
        type: "",
        breed: "",
        age: "",
        agegroup: "",
        size: "",
        energy: "",
        badge: "",
        img: "",
      });
    } catch (err) {
      setSaveMsg("Failed to add pet");
    }
  }

  return (
    <div className="page">
      <Header
        setLoginTrue={() => setShowLogin(true)}
        petData={petData}
        loginState={loginState}
        setLoginState={setLoginState}
        credential={credential}
        setAdminLogin={setAdminLogin}
        setCurrentUser={setCurrentUser}
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
          element={
            <Pets
              showLogin={showLogin}
              pets={pets}
              adminLogin={adminLogin}
              setShowAdBit={setShowAdBit}
              loginState={loginState}
              openLogin={() => setShowLogin(true)}
              currentUser={currentUser}
            />
          }
        />

        <Route path="/process" element={<Process />} />

        <Route
          path="/adoption"
          element={
            <Adoption
              loginState={loginState}
              openLogin={() => setShowLogin(true)}
              currentUser={currentUser}
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
          registry={registry}
          setRegistry={setRegistry}
          regMsg={regMsg}
          newUser={newUser}
          adminLoginHandler={adminLoginHandler}
        />
      ) : null}

      {showAdBit ? (
        <Addpet
          setShowAdBit={setShowAdBit}
          newPet={newPet}
          handleNewPetChange={handleNewPetChange}
          handleSavePet={saveNewPet}
          saveMsg={saveMsg}
          setSaveMsg={setSaveMsg}
        />
      ) : null}
    </div>
  );
}

export default App;

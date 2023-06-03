import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import FarmPage from "./components/FarmPage/FarmPage";
import GraveyardPage from "./components/GraveyardPage/GraveyardPage";
import BuddydexPage from "./components/Buddydex/BuddydexPage";

function App() {
  const [pets, setPets] = useState ([
    {
      name: "Salina",
      dateOfBirth: "2022-01-01",
      collected: true,
      images: [
        "https://media.discordapp.net/attachments/1082563227851956234/1100655896239018064/salina.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655896239018064/salina.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655896239018064/salina.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655896239018064/salina.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655896239018064/salina.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655896239018064/salina.png?width=850&height=1134",
      ],
      limbs: 5,
    },
    {
      name: "Henry",
      dateOfBirth: "2022-02-02",
      collected: false,
      images: [
        "https://media.discordapp.net/attachments/1082563227851956234/1100655894049603614/henry.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655894049603614/henry.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655894049603614/henry.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655894049603614/henry.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655894049603614/henry.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655894049603614/henry.png?width=850&height=1134",
      ],
      limbs: 5,
    },
    {
      name: "Bird",
      dateOfBirth: "2022-02-02",
      collected: false,
      images: [
        "https://media.discordapp.net/attachments/1073091439212372029/1114501708916199474/bird-0.png?width=60&height=60",
        "https://media.discordapp.net/attachments/1073091439212372029/1114501709247561759/bird-1.png?width=60&height=60",
        "https://media.discordapp.net/attachments/1073091439212372029/1114501709604065341/bird-2.png?width=60&height=60",
        "https://media.discordapp.net/attachments/1073091439212372029/1114501709931225108/bird-3.png?width=60&height=60",
        "https://media.discordapp.net/attachments/1073091439212372029/1114501710283542648/bird-4.png?width=60&height=60",
        "https://media.discordapp.net/attachments/1073091439212372029/1114501710564565123/bird-dead.png?width=60&height=60",
      ],
      limbs: 5,
    },
    {
      name: "Christian",
      dateOfBirth: "2022-02-02",
      collected: false,
      images: [
        "https://media.discordapp.net/attachments/1082563227851956234/1100655396558999592/chrico.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655396558999592/chrico.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655396558999592/chrico.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655396558999592/chrico.png?width=850&height=1134",
      ],
      limbs: 5,
    },
    {
      name: "Christian",
      dateOfBirth: "2022-02-02",
      collected: false,
      images: [
        "https://media.discordapp.net/attachments/1082563227851956234/1100655396558999592/chrico.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655396558999592/chrico.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655396558999592/chrico.png?width=850&height=1134",
        "https://media.discordapp.net/attachments/1082563227851956234/1100655396558999592/chrico.png?width=850&height=1134",
      ],
      limbs: 5,
    },
  ]);

  const updateCollectedStatus = (petName, newStatus) => {
    const updatedPets = pets.map((pet) => {
      if (pet.name === petName) {
        return {
          ...pet,
          collected: newStatus,
        };
      }
      return pet;
    });

    setPets(updatedPets);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/farm" 
           element={<FarmPage pets={pets} updateCollectedStatus={updateCollectedStatus} />}></Route>
        <Route path="/graveyard" element={<GraveyardPage />}></Route>
        <Route path="/buddydex" element={<BuddydexPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

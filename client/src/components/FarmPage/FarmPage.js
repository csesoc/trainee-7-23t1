import React from "react";
import Pet from "./Pet";
import Clock from "./Clock";
import "./farm.css";
import { useState } from "react";

function FarmPage({ pets, updateCollectedStatus, updateLimbStatus }) {
  const [petCount, setCount] = useState(1);

  // const handleCollectClick = (petName) => {
  //   // Find the index of the pet being clicked
  //   const clickedPetIndex = pets.findIndex((pet) => pet.name === petName);

  //   // Generate a random index excluding the clicked pet
  //   const randomIndex = Math.floor(Math.random() * pets.length);
  //   const randomPetIndex =
  //     randomIndex === clickedPetIndex
  //       ? (randomIndex + 1) % pets.length
  //       : randomIndex;

  //   // Get the name of the randomly selected pet
  //   const randomPetName = pets[randomPetIndex].name;

  //   // Call the updateCollectedStatus function to update the collected status of both pets
  //   setCount(petCount + 1);
  //   updateCollectedStatus(petName, true);
  //   updateCollectedStatus(randomPetName, true);
  // };

  const handleCollectClick = (petName) => {
    // Filter the uncollected pets
    const uncollectedPets = pets.filter((pet) => !pet.collected);
  
    if (uncollectedPets.length === 0) {
      // Handle the case when all pets are already collected
      console.log("All pets are already collected.");
      return;
    }
    // Generate a random index from the uncollectedPets array
    const randomIndex = Math.floor(Math.random() * uncollectedPets.length);
  
    // Get the name of the randomly selected pet
    const randomPetName = uncollectedPets[randomIndex].name;
  
    // Call the updateCollectedStatus function to update the collected status of both pets
    setCount(petCount + 1);
    updateCollectedStatus(randomPetName, true);
  };
  
  const collectedPets = pets.filter((pet) => pet.collected);
  
  // Testing out the elimination options
  const handleMurderClick = (petName) => {
    // Filters the collected pets
    const collectedPets = pets.filter((pet) => pet.collected);
    
    if (collectedPets.length === 0) {
      // Write some death message idk
      return;
    }
    
    const randomIndex = Math.floor(Math.random() * collectedPets.length);
    
    const randomPetName = collectedPets[randomIndex].name;
    const randomPetLimbs = collectedPets[randomIndex].limbs - 1; 
    
    if(randomPetLimbs === 0) {
      updateLimbStatus(randomPetName, 4);
      updateCollectedStatus(randomPetName, false);
      return;
    }
    updateLimbStatus(randomPetName, randomPetLimbs);
  }
  
  return (
    <div className="farm-container">
      <div className="Farm">
        <button className="graveyard">
          <a href="graveyard">
            <b>☗</b>
          </a>
        </button>

        <button className="petcollection">
          <a href="buddydex">
            <b>☰</b>
          </a>
        </button>

        <h1>very doomed farm page</h1>
        <p>too doomed</p>
        <Clock petCount={petCount} />
        {collectedPets.map((pet, index) => (
          <div key={index}>
            <Pet
              tag="running"
              name={pet.name}
              limbs={pet.limbs}
              birthday={pet.dataOfBirth}
              image={pet.images[5 - pet.limbs]}
            />
          </div>
        ))}
        <button
          onClick={() => {
            console.log("aaaaa");
            handleCollectClick(pets.name);
          }}
        >
          Summon Pet
        </button>
        <button
          onClick={() => {
            console.log('OUCH...')
            handleMurderClick(pets);
          }}
        >Night mode
        </button>
      </div>
    </div>
  );
}

export default FarmPage;

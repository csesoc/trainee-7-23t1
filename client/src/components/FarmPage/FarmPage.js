import React from "react";
import Pet from "./Pet";
import Clock from "./Clock";
import "./farm.css";
import { useState } from "react";

function FarmPage({ pets, updateCollectedStatus, updateLimbStatus }) {
  const [petCount, setCount] = useState(1);
  const [collectedPet, setCollectedPet] = useState(null);
  const [eliminatedPet, eliminatePet] = useState(null);
  

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
    // Render the collected pet overlay
    setCollectedPet(uncollectedPets[randomIndex]);
  
    // Call the updateCollectedStatus function to update the collected status of both pets
    setCount(petCount + 1);
    updateCollectedStatus(randomPetName, true);


    // Hide the overlay after 10 seconds
    setTimeout(() => {
      setCollectedPet(null);
    }, 10000);
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
    eliminatePet(collectedPets[randomIndex]);
    
    setTimeout(() => {
      eliminatePet(null);
    }, 10000);

  }
  
  return (
    <div className="farm-container">
      <div className="farm">
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
              collected={pet.collected}
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

        
        {collectedPet && (
          <div className="collected-overlay">
            <img width="200px" src={collectedPet.images[5 - collectedPet.limbs]} alt="there is meant to be a pet here"></img>
            <div className="collected-text">
              {collectedPet.name} collected
            </div>
          </div>
        )}

        {eliminatedPet && (
          <div className="collected-overlay2">
            <img width="200px" src={eliminatedPet.images[5 - eliminatedPet.limbs + 1]} alt="there is meant to be a pet here"></img>
            <div className="collected-text2">
              {eliminatedPet.name} begs you to sleep (please)
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default FarmPage;


// {eliminatedPet && (
//   <div className="deadly-overlay">
//     <div className="crash-container">
//       <img width="200px" src={eliminatedPet.images[5 - eliminatedPet.limbs]} alt="there is meant to be a pet here" className="catapulted"></img>
//       <img width="400px" src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/a53e4fb5a4d1b96.png" alt="bus" className="bus"></img>
//     </div>
//     <div className="collected-text">
//       {eliminatedPet.name} begs you to sleep
//     </div>
//   </div>
// )}
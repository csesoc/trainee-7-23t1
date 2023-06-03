import React from 'react';
import Pet from './Pet';
import Clock from './Clock';
import "./farm.css";


function FarmPage({ pets, updateCollectedStatus }){
  const handleCollectClick = (petName) => {
    // Find the index of the pet being clicked
    const clickedPetIndex = pets.findIndex((pet) => pet.name === petName);

    // Generate a random index excluding the clicked pet
    const randomIndex = Math.floor(Math.random() * pets.length);
    const randomPetIndex = randomIndex === clickedPetIndex
      ? (randomIndex + 1) % pets.length
      : randomIndex;

    // Get the name of the randomly selected pet
    const randomPetName = pets[randomPetIndex].name;
    
    // Call the updateCollectedStatus function to update the collected status of both pets
    updateCollectedStatus(petName, true);
    updateCollectedStatus(randomPetName, true);
    
  };

  const collectedPets = pets.filter((pet) => pet.collected);
  
  return (
    <div className="farm-container">
        <div className="Farm">
        <button class="graveyard">
          <a href="graveyard">
            <b>☗</b>
          </a>
        </button>
        <button class="petcollection">
          <a href="buddydex">
            <b>☰</b>
          </a>
        </button>

      <h1>very doomed farm page</h1>
      <p>too doomed</p>
      <Clock />
      {collectedPets.map((pet, index) => (
        <div key={index}>
          <Pet tag="running" name={pet.name} limbs={pet.limbs} birthday={pet.dataOfBirth} image={pet.images[5-pet.limbs]}/>
        </div>
      ))}
      <button onClick={() => handleCollectClick(pets.name)}>
            Summon Pet
      </button>
      <button>Night mode</button>
    </div>
  );
};

export default FarmPage;

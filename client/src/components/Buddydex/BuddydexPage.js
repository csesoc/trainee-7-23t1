import React from 'react';
import './buddydex.css';
import PetElement from './PetElement.js';


const BuddydexPage = () => {
  return (
    <div class="buddy_cont">
      <div>
        <button class="return">
          <a href="farm">
            <b>⇦</b>
          </a>
        </button>
          
        <div class="buddy_wrapper">
          <h1 class="buddy_h">PETS</h1>
          <div id="pets" class="pets">
            <div id="pet" class="pet">
              <div class="row">
                <div class="pet-container">

                </div>
                <div class="pet-container">

                </div>
                <div class="pet-container">
              
                </div>
                <div class="pet-container">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuddydexPage;
import React from 'react';

import PetElement from '../PetElement.js';
import '../buddydex.css';

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
                  <PetElement 
                    name='Milo' 
                    type='dog' 
                    description='Just a cute dog.'
                    collected={true} 
                  />
                </div>
                <div class="pet-container">
                  <PetElement 
                    name='Milo' 
                    type='dog' 
                    description='Just a cute dog.'
                    collected={true} 
                  />
                </div>
                <div class="pet-container">
                  <PetElement 
                    name='Milo' 
                    type='dog' 
                    description='Just a cute dog.'
                    collected={true} 
                  /> 
                </div>
                <div class="pet-container">
                  <PetElement 
                    name='Milo' 
                    type='dog' 
                    description='Just a cute dog.'
                    collected={false} 
                  />
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

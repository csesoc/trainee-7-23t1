import React from 'react';
import './buddydex.css';
import PetElement from './PetElement.js';

import miloImage from './dog-0.png';
import mittensImage from './cat-0.png';
import twitterImage from './bird-0.png';
import salinaImage from './salina.png';
import carrotsImage from './rabbit-0.png';
import henryImage from './henry.png';
import christImage from './chrico.png';

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

              <div class="row">
                <div class="pet-box">
                  <PetElement
                    name='Milo'
                    type='Dog'
                    description='Just a cute dog.'
                    collected={false}
                    imageSrc={miloImage}
                  />
                </div>
                <div class="pet-box">
                  <PetElement
                    name='Mittens'
                    type='Cat'
                    description='Just a cute cat.'
                    collected={false}
                    imageSrc={mittensImage}
                  />
                </div>
                <div class="pet-box">
                  <PetElement
                    name='Twitter'
                    type='Bird'
                    description='Just a cute bird.'
                    collected={true}
                    imageSrc={twitterImage}
                  />
                </div>
                <div class="pet-box">
                  <PetElement
                    name='Salina'
                    type='Human'
                    description='Training lead.'
                    collected={true}
                    imageSrc={salinaImage}
                  />
                  <div class="pet-box">
                    <PetElement
                      name='Carrots'
                      type='Rabbit'
                      description='Just a cute rabbit.'
                      collected={false}
                      imageSrc={carrotsImage}
                    />
                  </div>
                  <div class="pet-box">
                    <PetElement
                      name='Henry'
                      type='Human'
                      description='Training lead.'
                      collected={true}
                      imageSrc={henryImage}
                    />
                   <div class="pet-box">
                    <PetElement
                      name='Christ'
                      type='Human'
                      description='See you there!'
                      collected={true}
                      imageSrc={christImage}
                    />
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default BuddydexPage;

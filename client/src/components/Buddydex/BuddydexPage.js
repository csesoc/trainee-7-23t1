import React from 'react';
import './buddydex.css';
import PetElement from './PetElement.js';

import miloImage from './dog-0.png';
import mittensImage from './cat-0.png';
import twitterImage from './bird-0.png';
import salinaImage from './salina.png';

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
                    collected={true}
                    imageSrc={miloImage}
                  />
                </div>
                <div class="pet-box">
                  <PetElement
                    name='Mittens'
                    type='Cat'
                    description='Just a cute cat.'
                    collected={true}
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
                    collected={false}
                    imageSrc={salinaImage}
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
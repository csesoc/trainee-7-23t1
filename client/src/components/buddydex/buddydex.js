function createPetElement(imageSrc, name, type, description) {
    const petDiv = document.createElement('div');
    petDiv.classList.add('pet');
  
    const petImage = document.createElement('img');
    petImage.src = imageSrc;
    petImage.width = '50px';
    petDiv.appendChild(petImage);
  
    const petName = document.createElement('h3');
    petName.textContent = name;
    petDiv.appendChild(petName);
  
    const petType = document.createElement('p');
    petType.textContent = type;
    petDiv.appendChild(petType);
  
    const petDescription = document.createElement('p');
    petDescription.textContent = description;
    petDiv.appendChild(petDescription);
  
    return petDiv;
  }
  
  const petContainer1 = document.getElementById('pet1');
  const dogElement = createPetElement('dog-0.png', 'Milo', 'Dog', 'Just a cute dog.');
  petContainer1.appendChild(dogElement);
  
  const petContainer2 = document.getElementById('pet2');
  const catElement = createPetElement('cat-0.png', 'Mittens', 'Cat', 'Just a cute cat.');
  petContainer2.appendChild(catElement);
  
  const petContainer3 = document.getElementById('pet3');
  const birdElement = createPetElement('bird-0.png', 'Elon', 'Bird', 'Twitter bird.');
  petContainer3.appendChild(birdElement);

  const petContainer4 = document.getElementById('pet4');
  const salinaElement = createPetElement('salina.png', 'Salina', 'Human', 'The better training lead.');
  petContainer4.appendChild(salinaElement);
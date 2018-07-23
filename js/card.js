'use strict';
const nameCard = document.querySelector('.fill__input-name');
const nameInput = document.querySelector('.fill__input-job');

const writeData = (event) => {
  const guiltyElement = event.currentTarget;
  const targetID = guiltyElement.getAttribute('data-info');
  document.querySelector('#' + targetID).innerHTML = guiltyElement.value;
};
nameCard.addEventListener('keyup', writeData);
nameInput.addEventListener('keyup', writeData);

'use strict';
var nameCard= document.querySelector('.fill__input-name');
var nameInput=document.querySelector('.fill__input-job');

function writeData(event) {
  var guiltyElement = event.currentTarget;
  var targetID = guiltyElement.getAttribute('data-info');
  document.querySelector('#' + targetID).innerHTML = guiltyElement.value;
}
nameCard.addEventListener('keyup', writeData);
nameInput.addEventListener('keyup', writeData);

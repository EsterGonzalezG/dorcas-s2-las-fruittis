'use strict';

var cardContainer = document.querySelector('.viewfinder');
var colorContainer = document.querySelectorAll('.dropdown__colorsgroups');
var radioRed = document.querySelector('.radio--red');
var radioGrey = document.querySelector('.radio--grey');
var radios = document.querySelectorAll('.radio');

function init() {
  for(var i = 0; i < colorContainer.length; i++) {
    radios[i].addEventListener('click', setStyles);
  }
}

function setStyles() {
  resetColor();
  if (radioRed.checked) {
    cardContainer.classList.add('viewfinder--red');
  } else if (radioGrey.checked) {
    cardContainer.classList.add('viewfinder--grey');
  } else {
    cardContainer.classList.add('viewfinder--blue');
  }
}

function resetColor() {
  cardContainer.classList.remove('viewfinder--red', 'viewfinder--grey', 'viewfinder--blue');
}

init();

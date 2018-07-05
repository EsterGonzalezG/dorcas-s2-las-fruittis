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
    cardContainer.classList.add('viewfinder viewfinder--red');/*className remplaza el valor de la clase actual por esta*/
  } else if (radioGrey.checked) {
    cardContainer.classList.add('viewfinder viewfinder--grey');
  } else {
    cardContainer.className.add('viewfinder viewfinder--blue');
  }
}

init();

function resetColor() {
  cardContainer.classList.remove('viewfinder--red', 'viewfinder--grey', 'viewfinder--blue');
}
